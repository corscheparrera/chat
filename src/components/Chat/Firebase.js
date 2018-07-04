import Firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB0nmtZ59kXr6Iy7hABYjdYTYzaM2AJPIc",
  authDomain: "photo-ticket-app.firebaseapp.com",
  databaseURL: "https://photo-ticket-app.firebaseio.com",
  projectId: "photo-ticket-app",
  storageBucket: "photo-ticket-app.appspot.com",
  messagingSenderId: "430371670959"
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

var fire = Firebase.initializeApp(config);

export default fire;
