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

  
function addUser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
}