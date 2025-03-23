// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 Updated Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ5zpZWO-qF1HvP73esHpnGBSL3ZmyOos",
    authDomain: "login-and-sign-up-2a4f9.firebaseapp.com",
    projectId: "login-and-sign-up-2a4f9",
    storageBucket: "login-and-sign-up-2a4f9.appspot.com", // 🔄 Fixed incorrect storageBucket
    messagingSenderId: "348338071623",
    appId: "1:348338071623:web:c929b6d54203dd6c3ce962" // 🔄 Fixed incorrect appId format
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Function to Register a New User
window.registerUser = function() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (!email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Account created successfully! You can now log in.");
            showLogin();
        })
        .catch((error) => {
            alert(error.message);
        });
};

// ✅ Function to Log In Users
window.loginUser = function() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.location.href = "https://judexxx158.github.io/LoginAuth/dashboard.html"; // ✅ Updated GitHub Pages URL
        })
        .catch((error) => {
            alert(error.message);
        });
};

// ✅ Show Signup Form
window.showSignup = function() {
    document.getElementById("login-box").classList.add("hidden");
    document.getElementById("signup-box").classList.remove("hidden");
};

// ✅ Show Login Form
window.showLogin = function() {
    document.getElementById("signup-box").classList.add("hidden");
    document.getElementById("login-box").classList.remove("hidden");
};
