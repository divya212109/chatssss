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


    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");


    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name, 
                message: msg,
                like: 0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
