  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  // Your web app's Firebase configuration
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
  const auth=getAuth();

  var mobilelogin=document.getElementById('mobilelogin');
  var email=document.getElementById("login-email");
  var passwords=document.getElementById("login-password");
  var loginsubbutton=document.querySelector(".login-sub-button");

  loginsubbutton.onclick = function loginAndRetrieveData(e) {
    e.preventDefault();
    var obj = {
      mobile:mobilelogin.value,
      email: email.value,
      passwords: passwords.value,
    };
  //console.log("mobile"+mobilelogin.value)
    signInWithEmailAndPassword(auth, obj.email, obj.passwords)
      .then(function (userCredential) {
        var user = userCredential.user; 
        console.log("mobilelogin.value "+mobilelogin.value);
        let inputData=mobilelogin.value;
        localStorage.setItem('inputData', mobilelogin.value);
        console.log("Setting input data in localStorage: " + inputData);

        console.log(user.uid);
        alert("Logged Successfully");
        setTimeout(() => {
          window.location.replace('welcome.html');
        }, 3000);
        
      })
      .catch(function (err) {
        window.location.replace('Login.html');
        alert("Login error: " + err);
        console.log("Unsuccessful login");
      });
  };

    