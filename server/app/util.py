from flask import Blueprint
import json
from flask import Flask, jsonify, request
import erppeek
from flask import abort
import base64

def objectMarshalOutbound(model, objects, client):
    fields = client.fields(model)
    objsArr = []
    for object in objects:
        objDict = {}
        for key in object:
            fieldValue = object[key]
            fieldDef = fields[key]
            if fieldDef["type"] == "many2one":
                if fieldValue:
                    objDict[key] = fieldValue[0]
                    objDict[key + '__DESC__'] = fieldValue[1]
                else:
                    objDict[key] = ''
                    objDict[key + '__DESC__'] = ''
            else:
                objDict[key] = fieldValue
        objsArr.append(objDict)
    return objsArr

def objectMarshalInbound(model, objects, client):
    fields = client.fields(model)
    objsArr = []
    for object in objects:
        objDict = {}
        for key in object:
            fieldValue = object[key]
            if key in fields:
                objDict[key] = fieldValue if fieldValue else None
        objsArr.append(objDict)
    return objsArr

def bad_request(message):
    response = jsonify({'message': message})
    response.status_code = 400
    return response