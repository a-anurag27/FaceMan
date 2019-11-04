import pyrebase
import firebase_admin
from firebase_admin import credentials
from datetime import datetime

def motiondetect(a):
    config = {
    "apiKey": "AIzaSyCxPQOWBwRwIGCm8nKi6vU_SPNwHtX187k",
    "authDomain": "facedb-6a754.firebaseapp.com",
    "databaseURL": "https://facedb-6a754.firebaseio.com",
    "storageBucket": "facedb-6a754.appspot.com"
    }
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    data = {"Timestamp : ": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),"name": a}
    db.child("FaceDB").push(data)



