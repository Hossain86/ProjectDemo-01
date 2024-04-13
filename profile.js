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
      
      console.log("email: "+user.email);
  }
})


const logoutbtn=document.querySelector(".logoutbtn");
logoutbtn.onclick= function Logout(){
  auth.signOut(auth).then(() => {
      // Sign-out successful.
      alert('Signout Successfull');
    }).catch((error) => {
      // An error happened.
      alert("Unsuccessfull"+ error);
    });
}

window.onload = async function retrieveData() {
try {
  const inputData = localStorage.getItem('inputData');
  console.log(inputData);

  const dbRef = ref(db);

  const snapshot = await get(child(dbRef, 'AllStudent/' + inputData));

  if (snapshot.exists()) {
    const globalData = { ...snapshot.val() }; // Deep copy of data
    console.log(globalData);
    document.getElementById("nameText").innerHTML = "Hello, "+globalData.name;
    // const performance=localStorage.getItem('correctPercentage');
    // console.log(performance);
    document.getElementById("user").innerHTML =
       "Email:  "+globalData.email+"<br>"
       +"Mobile:  "+globalData.mobile+"<br>"
       +"School:  "+globalData.school+"<br>"
       +"Performance:  "+globalData.progress+"%<br>";
       localStorage.setItem('Endvalue',parseInt(globalData.progress));
  } else {
    alert("Employee doesn't exist");
  }
} catch (error) {
  alert("Unsuccessful");
  console.error(error);
}
}

  let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");

  let progressStartValue = 0,    
  progressEndValue = localStorage.getItem('Endvalue'),    
  speed = 50;
  
  localStorage.removeItem("Endvalue");
  let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`
  circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`

  if(progressStartValue == progressEndValue){
      clearInterval(progress);
  }    
  }, speed);