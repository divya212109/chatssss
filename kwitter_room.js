
var firebaseConfig = {
    apiKey: "AIzaSyDscFrOlM0VC9iXYy_7B5B27KPtv8iVZ0k",
    authDomain: "letschat-9dd33.firebaseapp.com",
    databaseURL: "https://letschat-9dd33-default-rtdb.firebaseio.com",
    projectId: "letschat-9dd33",
    storageBucket: "letschat-9dd33.appspot.com",
    messagingSenderId: "865172096037",
    appId: "1:865172096037:web:df8de50298cdac69936bcc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

document.getElementById("user_name").innerHTML = "welcome" +  user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";

                //End code
          });
    });
}
getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kiwtter_page.html";
}
