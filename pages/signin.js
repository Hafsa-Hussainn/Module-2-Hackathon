// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfc-SsUNmVvGs6z9dF9bQzJOl7LeOhVAI",
    authDomain: "login-project-efa14.firebaseapp.com",
    projectId: "login-project-efa14",
    storageBucket: "login-project-efa14.firebasestorage.app",
    messagingSenderId: "260790826429",
    appId: "1:260790826429:web:061882c239d4d15ceb4ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Submit button

let submit = document.getElementById('submit')
submit.addEventListener("click", function (event) {
    event.preventDefault()

    // signin inputs

    var email = document.getElementById('sin_email').value;
    var password = document.getElementById('sin_password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            alert("Signed in.....")
            window.location.href = "./blog.html";

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
            // ..
        });
})

