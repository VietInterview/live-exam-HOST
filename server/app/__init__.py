from flask import Flask, jsonify, request, render_template
from flask.ext.marshmallow import Marshmallow
from flask_socketio import SocketIO
from config import config

ma = Marshmallow()
app = Flask(__name__)

def create_app(config_name):
    app.config.from_object(config[config_name])

    ma.init_app(app)

    from .api import api as api_blueprint
    app.register_blueprint(api_blueprint, url_prefix='/api')

    @app.route('/', methods=['GET'])
    def index():
        return 'ERP v1.0'


    # send CORS headers for developer mode only
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        if request.method == 'OPTIONS':
            response.headers['Access-Control-Allow-Methods'] = 'DELETE, GET, POST, PUT'
            response.headers['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token'
        return response

    return app
