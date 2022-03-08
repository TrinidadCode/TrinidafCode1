 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
 import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from "firebase/auth";
 

 const firebaseConfig = {
   apiKey: "AIzaSyAsMXiEDqT1vUchcI_lygNs8LYMMld7unE",
   authDomain: "trinidadcodelogin.firebaseapp.com",
   projectId: "trinidadcodelogin",
   storageBucket: "trinidadcodelogin.appspot.com",
   messagingSenderId: "387351504504",
   appId: "1:387351504504:web:ead01efca8e159cf39ef8d",
   measurementId: "G-662Z9GDTL6"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth= getAuth(app);



 document.getElementById("reg-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
 });
 
 document.getElementById("log-btn").addEventListener('click', function(){
  document.getElementById("register-div").style.display="none";
  document.getElementById("login-div").style.display="inline";
 
 });
 
   document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail= document.getElementById("login-email").value;
    const loginPassword =document.getElementById("login-password").value;
 
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
   .then((userCredential) => {
     const user = userCredential.user;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
 
   });
 });
 
 
   document.getElementById("register-btn").addEventListener('click', function(){
 
    const registerEmail= document.getElementById("register-email").value;
    const registerPassword =document.getElementById("register-password").value;
 
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
   .then((userCredential) => {
     const user = userCredential.user;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
   }).catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;
     document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
 
   });
 });
 
 
 document.getElementById("log-out-btn").addEventListener('click', function(){
   signOut(auth).then(() => {
      document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
   }).catch((error) => {
      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
   });
 
 });