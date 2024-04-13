
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

//only getting previous globalData.progress for calculation
      async function retrieveData() {
        try {
          const inputData = localStorage.getItem('inputData');
          console.log("RetrieveData: "+inputData)
          const dbRef = ref(db);
          const snapshot = await get(child(dbRef, 'AllStudent/' + inputData));
          if (snapshot.exists()) {
            const globalData = { ...snapshot.val() }; // Deep copy of data
            console.log(globalData);
            console.log(globalData.progress);
            return globalData.progress;

            } 
          else {
            alert("Employee doesn't exist"); 
            return 0;
          }
        } catch (error) {
          alert("Unsuccessful");
          console.error(error); 
          return 0;
        }
      }

// Call the asynchronous function with await
let previousPercent = await retrieveData();
previousPercent = parseInt(previousPercent); // Convert to number if it's a string
console.log("retrieveData: " + previousPercent);

let currentPercent = parseInt(localStorage.getItem('currentPercent'));
console.log("currentPercent: " + currentPercent);

let avgPercent = Math.floor((previousPercent + currentPercent) / 2);
console.log("avgPercent: " + avgPercent);
localStorage.setItem("correctPercentage",avgPercent);

// only updating progress value in database

    document.getElementById("updatedata").onclick=  function UpdateData(){
        console.log(avgPercent);
        const inputData = localStorage.getItem('inputData');
        console.log("UpdateData: "+ avgPercent);
        update(ref(db,'AllStudent/' + inputData),{
          progress:avgPercent,
        })
        .then(()=>{
          alert("Data Updated Successfully");
        })
        .catch((error)=>{
          alert("Unsuccessfull");
          console.log(error);
        })
      }