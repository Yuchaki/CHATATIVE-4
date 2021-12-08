var firebaseConfig = {
      apiKey: "AIzaSyBjoGlBnh1aNpv_zrSmjNheBFB1JynoDXI",
      authDomain: "kwitter-48ca2.firebaseapp.com",
      databaseURL: "https://kwitter-48ca2-default-rtdb.firebaseio.com",
      projectId: "kwitter-48ca2",
      storageBucket: "kwitter-48ca2.appspot.com",
      messagingSenderId: "920707602248",
      appId: "1:920707602248:web:95e199da234057a8d6c57d",
      measurementId: "G-CKW80LRKHD"
    };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name -" + Room_names)
       row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "Chatative_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name)
      window.location = "Chatative_page.html"
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
             window.location = "index.html";
}