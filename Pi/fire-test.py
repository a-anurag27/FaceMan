import pyrebase
import firebase_admin
from firebase_admin import credentials
from datetime import datetime
config = {
    "apiKey": "AIzaSyCxPQOWBwRwIGCm8nKi6vU_SPNwHtX187k",
    "authDomain": "facedb-6a754.firebaseapp.com",
    "databaseURL": "https://facedb-6a754.firebaseio.com",
    "storageBucket": "facedb-6a754.appspot.com"
}
firebase = pyrebase.initialize_app(config)
db = firebase.database()
#ref = db.reference('FaceDB/Uddhav')
#users_ref = ref.child('FaceDB/Uddhav/TimeStamp')
data = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
#booksRef = ref.child("FaceDB/Uddhav")
db.child("Uddhav").set({
    "TimeStamp": data
})
#db.child("FaceDB/Uddhav").set(data)
db.child("Anurag").set({
    "TimeStamp": data
})
db.child("nigel").set({
    "TimeStamp": data
})
db.child("prithvi").set({
    "TimeStamp": data
})
db.child("purvesh").set({
    "TimeStamp": data
})
db.child("pratik").set({
    "TimeStamp": data
})
db.child("santhosh").set({
    "TimeStamp": data
})
db.child("zia").set({
    "TimeStamp": data
})
