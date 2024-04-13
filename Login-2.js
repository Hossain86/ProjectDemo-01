
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
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

import { getDatabase, ref, child, get, onValue, set, update, remove } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

const db=getDatabase();

let globalData = {};

async function retrieveData(mobile) {
  try {
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, 'AllStudent/' +"5656"));
    console.log("mobile:"+mobile);
    if (snapshot.exists()) {
      globalData = { ...snapshot.val() }; // Deep copy of data
      console.log(globalData); // Log data after retrieval
      return globalData; // Return globalData
    } else {
      alert("Employee doesn't exist");
    }
  } catch (error) {
    alert("Unsuccessful");
    console.error(error);
  }
}

export { retrieveData };