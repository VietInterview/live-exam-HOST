from flask import Blueprint
import json
from flask import Flask, jsonify, request
import erppeek
from .. import app
from flask import abort
import base64
from ..util import objectMarshalOutbound, objectMarshalInbound, bad_request

api = Blueprint('api', __name__)

@api.route('/login', methods=['POST'])
def login():
    try:
        username = request.json['username']
        password = request.json['password']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        uid = client.common.login(app.config['DB_NAME'], username, password)
        if not uid:
            return bad_request('Invalid username or password')
        user = client.read('res.users',uid)
        user = objectMarshalOutbound('res.users', [user], client)[0]
        return jsonify(user)
    except Exception as exc:
        print ('Login error ', exc, request.json)
        return bad_request(exc.message)


@app.route('/resetpass', methods=['POST'])
def requestResetPass():
    try:
        email = request.json['email']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        user = client.model('res.users').get([('email','=',email)])
        if not user or user.login =='admin':
            return jsonify(result=False)
        otk = client.model('viethrm.otk_resetpass').create({'email':email, 'user_id': user.id, 'url':app.config['RESET_PASS_URL']})
        result = otk.sendResetPassEmail()
        return jsonify(result=result)
    except Exception as exc:
        print ('Request reset pass error ', exc)
        return bad_request(exc.message)

@app.route('/resetpass', methods=['GET'])
def applyResetPass():
    try:
        token = request.values['token']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        otk = client.model('viethrm.otk_resetpass').get([('token','=',token)])
        if not otk:
            return jsonify(result=False)
        result = otk.changePass()
        return jsonify(result=result)
    except Exception as exc:
        print ('Apply reset pass error ', exc)
        return bad_request(exc.message)

@app.route('/changepass', methods=['POST'])
def changePass():
    try:
        user_id = request.json['user_id']
        old_pass = request.json['old_pass']
        new_pass = request.json['new_pass']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        user = client.model('res.users').get(user_id)
        if not user or user.login == 'admin':
            return jsonify(result=False)
        user.write({'password':new_pass})
        return jsonify(result=True)
    except Exception as exc:
        print ('Apply change pass error ', exc)
        return bad_request(exc.message)

@api.route('/search', methods=['POST'])
def search():
    try:
        model = request.json['model']
        offset = int(request.json['offset']) if 'offset' in request.json else 0
        limit = int(request.json['limit']) if 'limit' in request.json else None
        order = request.json['order'] if 'order' in request.json else None
        domain = request.json['domain'] if 'domain' in request.json else []
        parsed_domain = domainParser(domain)
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        ids = client.search(model,eval(domain),offset=offset,limit=limit,order=order)
        return jsonify(ids)
    except Exception as exc:
        print ('Searching error ', exc, request.json)
        return bad_request(exc.message)

@api.route('/count', methods=['POST'])
def count():
    try:
        model = request.json['model']
        domain = request.json['domain'] if 'domain' in request.json else []
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        record_num = client.count(model,eval(domain))
        return record_num
    except Exception as exc:
        print ('Counting error ', exc, request.json)
        return bad_request(exc.message)

@api.route('/read', methods=['POST'])
def read():
    try:
        model = request.json['model']
        fields = request.json['fields'] if 'fields' in request.json else None
        ids = request.json['ids'] if 'ids' in request.json else []
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        records = client.read(model,ids,fields=fields)
        records = objectMarshalOutbound(model, records, client)
        return jsonify(records)
    except Exception as exc:
        print ('Reading error ', exc, request.json)
        return bad_request(exc.message)

@api.route('/search_read', methods=['POST'])
def search_read():
    try:
        model = request.json['model']
        fields = request.json['fields'] if 'fields' in request.json else None
        offset = int(request.json['offset']) if 'offset' in request.json else 0
        limit = int(request.json['limit']) if 'limit' in request.json else None
        order = request.json['order'] if 'order' in request.json else None
        domain = request.json['domain'] if 'domain' in request.json else []
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        records = client.read(model,eval(domain),fields=fields,offset=offset,limit=limit,order=order)
        records =  objectMarshalOutbound(model, records, client)
        return jsonify(records)
    except Exception as exc:
        print ('Searching and Reading error ', exc, request.json)
        return bad_request(exc.message)

@api.route('/search_count', methods=['POST'])
def search_count():
    try:
        model = request.json['model']
        domain = request.json['domain'] if 'domain' in request.json else []
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        count = client.count(model,eval(domain))
        return jsonify(count)
    except Exception as exc:
        print ('Searching and Reading error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/create', methods=['POST'])
def create():
    try:
        model = request.json['model']
        values = request.json['values']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        values =  objectMarshalInbound(model, [values], client)[0]
        id = client.create(model,values)
        return jsonify(id=id, success=True)
    except Exception as exc:
        print ('Creating error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/update', methods=['POST'])
def update():
    try:
        model = request.json['model']
        id = int(request.json['id'])
        values = request.json['values']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        values =  objectMarshalInbound(model, [values], client)[0]
        obj = client.model(model).get(id)
        obj.write(values)
        return jsonify(success=True)
    except Exception as exc:
        print ('Updating error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/delete', methods=['POST'])
def delete():
    try:
        model = request.json['model']
        id = request.json['id']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        client.unlink(model,[id])
        return jsonify(success=True)
    except Exception as exc:
        print ('Deleting error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/execute', methods=['POST'])
def execute():
    try:
        model = request.json['model']
        method = request.json['method']
        paramList = request.json['paramList'] if 'paramList' in request.json else []
        paramDict = request.json['paramDict'] if 'paramDict' in request.json else {}
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        result = client.execute(model, method, paramList, paramDict)
        return jsonify(result)
    except Exception as exc:
        print ('Executing error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/exec_workflow', methods=['POST'])
def exec_workflow():
    try:
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        model = request.json['model']
        id = int(request.json['id'])
        signal = request.json['signal']
        result = client.exec_workflow(model,signal, id)
        return jsonify(result)
    except Exception as exc:
        print ('Executing workflow error ', exc, request.json)
        return bad_request(exc.message)


@api.route('/render_report', methods=['POST'])
def render_report():
    try:
        model = request.json['model']
        ids = request.json['ids']
        datas = request.json['datas']
        client = erppeek.Client( app.config['DB_SERVER_URL'], app.config['DB_NAME'], app.config['DB_USER'], app.config['DB_PASS'])
        report = client.render_report(model,ids, datas)
        return jsonify(success=True, report=report)
    except Exception as exc:
        print ('Rendering report error ', exc, request.json)
        return bad_request(exc.message)
