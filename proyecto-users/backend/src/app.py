from flask import Flask, request, jsonify, Response
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash
from bson import json_util
from bson.objectid import ObjectId

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/usuarios'
mongo = PyMongo(app)

@app.route('/users', methods=['POST'])
def create_users():
    username=request.json['username']
    password=request.json['password']
    email=request.json['email']
    if username and password and email:
        hashed_passwoard =  generate_password_hash(password)
        id = mongo.db.users.insert(
            {'username':username,'password':hashed_passwoard,'email':email}   
        )
        reponse = {
            'id': str(id),
            'username' : username,
            'password': hashed_passwoard,
            'email': email
        }
        return reponse
        
    else: 
        return not_found()
   
        
    return{'message' : 'recived'}
@app.errorhandler(404)
def not_found(error=None):
    respuesta = jsonify({
        'messaje': 'Resource Not Found: ' + request.url,
        'status': 404
    })
    respuesta.status_code = 404
    return respuesta

@app.route('/users',methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    response = json_util.dumps(users)
    return Response(response, mimetype='application/json')

@app.route('/users/<id>',methods=['GET'])
def get_user():
    user = mongo.db.users.find_one({'_id': ObjectId(id)})
    respuesta = json_util.dumps(user)
    return Response(respuesta, mimetype="application/json")
    
@app.route('/users/<id>',methods=['DELETE'])
def delete_user(id):
    mongo.db.users.delete_one({'_id': ObjectId(id)})
    repuesta =jsonify({'massage':'user'+ id + 'fue eliminado corectamente'})
    return repuesta



if __name__ == "__main__":
    app.run(debug=True)
