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
  //var uddhavData = data["Uddhav"];
  //document.getElementById("name").innerHTML = uddhavData.Name;
  //document.getElementById("ts").innerHTML = uddhavData.TimeStamp;

  var anuragData = data["Anurag"];
  document.getElementById("Aname").innerHTML = anuragData.Name;
  document.getElementById("Ats").innerHTML = anuragData.TimeStamp;
    
  var nigelData = data["nigel"];
  document.getElementById("Nname").innerHTML = nigelData.Name;
  document.getElementById("Nts").innerHTML = nigelData.TimeStamp;
  
  var prithviData = data["prithvi"];
  document.getElementById("Pname").innerHTML = prithviData.Name;
  document.getElementById("Pts").innerHTML = prithviData.TimeStamp;
  
  var purveshData = data["purvesh"];
  document.getElementById("Puname").innerHTML = purveshData.Name;
  document.getElementById("Puts").innerHTML = purveshData.TimeStamp;

  var pratikData = data["pratik"];
  document.getElementById("Prname").innerHTML = pratikData.Name;
  document.getElementById("Prts").innerHTML = pratikData.TimeStamp;

  var ZData = data["zia"];
  document.getElementById("Zname").innerHTML = ZData.Name;
  document.getElementById("Zts").innerHTML = ZData.TimeStamp;

  var SData = data["santhosh"];
  document.getElementById("Sname").innerHTML = SData.Name;
  document.getElementById("Sts").innerHTML = SData.TimeStamp;
  
});
