import pyrebase
import firebase_admin
from firebase_admin import credentials
from datetime import datetime

def motiondetect(a):
    config = {
    "apiKey": "AIzaSyASNC2ZMvG8-ht1fxwafEBwAy9g0kJAX-o",
    "authDomain": "etrack-41282.firebaseapp.com",
    "databaseURL": "https://etrack-41282.firebaseio.com",
    "storageBucket": "etrack-41282.appspot.com"
    }
    firebase = pyrebase.initialize_app(config)
    db = firebase.database()
    data = {"Timestamp : ": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),"name": a}
    db.child("FNET").push(data)
