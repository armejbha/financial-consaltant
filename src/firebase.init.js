// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4Eg4z-ys7W05kK9OWBicCWV61IIF-iQM",
    authDomain: "independent-service-prov-237f3.firebaseapp.com",
    projectId: "independent-service-prov-237f3",
    storageBucket: "independent-service-prov-237f3.appspot.com",
    messagingSenderId: "727078328968",
    appId: "1:727078328968:web:e91b17af51f55c7db31d3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;