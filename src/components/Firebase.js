import Firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyB0nmtZ59kXr6Iy7hABYjdYTYzaM2AJPIc',
  authDomain: 'photo-ticket-app.firebaseapp.com',
  databaseURL: 'https://photo-ticket-app.firebaseio.com',
  projectId: 'photo-ticket-app',
  storageBucket: 'photo-ticket-app.appspot.com',
  messagingSenderId: '430371670959',
}

var fire = Firebase.initializeApp(config)

export default fire
