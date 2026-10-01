import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyAP5n7WDbHk6pCyI_mCdfVBL0vjXez0r1M",
    authDomain: "my-new-80ee.firebaseapp.com",
    projectId: "my-new-80ee",
    storageBucket: "my-new-80ee.firebasestorage.app",
    messagingSenderId: "123440020539",
    appId: "1:123440020539:web:deb8698ad7ae9017cb301e",
    measurementId: "G-JWLNLSMQVF"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// ================= SIGN UP =================

const signUpBtn = document.getElementById("signUpBtn");

if (signUpBtn) {

    signUpBtn.addEventListener("click", function () {

        const email = document.getElementById("email").value;
        const password = document.getElementById("pswd").value;

        console.log("Signup button clicked");
        console.log(email, password);

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                console.log("USER CREATED:", userCredential.user);

                alert("Account Created Successfully!");

                window.location.href = "todo.html";

            })

            .catch((error) => {

                console.log("ERROR:", error.code);
                console.log("MESSAGE:", error.message);

                alert(error.message);

            });

    });

}


// ================= LOGIN =================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("pswd").value;

        console.log("Login button clicked");

        signInWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {

                console.log("LOGIN SUCCESS:", userCredential.user);

                alert("Login Successfully!");

                window.location.href = "todo.html";

            })

            .catch((error) => {

                console.log("ERROR:", error.code);
                console.log("MESSAGE:", error.message);

                alert(error.message);

            });

    });

}