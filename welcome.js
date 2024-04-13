 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  
  import { getAuth, onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBT_nTb-N1H8CdKf4OrUHwZYRKzLPI1kT8",
    authDomain: "loginresistration.firebaseapp.com",
    databaseURL: "https://loginresistration-default-rtdb.firebaseio.com",
    projectId: "loginresistration",
    storageBucket: "loginresistration.appspot.com",
    messagingSenderId: "912766266396",
    appId: "1:912766266396:web:2a95c6227133c41dab83d9"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  import { getDatabase, ref, child, get, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

  const db=getDatabase();
  
  let globalData = {};

  onAuthStateChanged(auth, (user) => {
    if(!user){
        location.replace("Login.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email;
        const inputData = localStorage.getItem('inputData'); // Retrieve input data from localStorage
        console.log(inputData);
        console.log("email: "+user.email);
        
    }
})


const btn=document.querySelector(".btn");
btn.onclick= function logout(){
    auth.signOut(auth).then(() => {
        // Sign-out successful.
        alert('Signout Successfull');
      }).catch((error) => {
        // An error happened.
        alert("Unsuccessfull"+ error);
      });
}

const inputData = localStorage.getItem('inputData'); // Retrieve input data from localStorage
console.log(inputData);

window.onload = async function retrieveData() {
  try {
    const inputData = localStorage.getItem('inputData');
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'AllStudent/' + inputData));
    if (snapshot.exists()) {
      const globalData = { ...snapshot.val() }; // Deep copy of data
      console.log(globalData); // Log data after retrieval
      console.log(globalData.email); // Log data after retrieval

      return globalData; // Return globalData
    } else {
      alert("Employee doesn't exist");
    }
  } catch (error) {
    alert("Unsuccessful");
    console.error(error);
  }
}

