from flask import Flask , request
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash, check_password_hash

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
        mongo.db.users
        
    else: 
        {'message' : 'recived'}
   
        
    return{'message' : 'recived'}


if __name__ == "__main__":
    app.run(debug=True)
