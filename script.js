var database = firebase.database();

var starCountRef = firebase.database().ref();

// console.log('aa');

starCountRef.once('value', function(snapshot) {
    data = snapshot.val();
    var uddhavData = data["Uddhav"];
    document.getElementById("name").innerHTML = uddhavData.Name;
    document.getElementById("ts").innerHTML = uddhavData.TimeStamp;
});

starCountRef.on('value', function(snapshot) {
//   console.log(snapshot.val());
  data = snapshot.val();
  var uddhavData = data["Uddhav"];
  document.getElementById("name").innerHTML = uddhavData.Name;
  document.getElementById("ts").innerHTML = uddhavData.TimeStamp;

  var anuragData = data["Anurag"];
  document.getElementById("Aname").innerHTML = anuragData.Name;
  document.getElementById("Ats").innerHTML = anuragData.TimeStamp;
});