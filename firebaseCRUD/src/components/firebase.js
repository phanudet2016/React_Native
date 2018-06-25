import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDW8ubPkqmw6WmUgX9GZbOWBKLyrrFie6o",
  authDomain: "todos-47d16.firebaseapp.com",
  databaseURL: "https://todos-47d16.firebaseio.com",
  projectId: "todos-47d16",
  storageBucket: "todos-47d16.appspot.com",
  messagingSenderId: "415728897270"
}
firebase.initializeApp(config)
export const itemsRef = firebase.database().ref('Items');
// export const db = app.database()
// export const itemsRef = db.ref('Items')
