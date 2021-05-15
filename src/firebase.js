import firebase from "firebase/app"
import "firebase/firestore"

const firebaseApp = firebase.initializeApp({
  // populate your firebase configuration data here.
  apiKey: "AIzaSyAd91XyIOVpGE95-I-dGPZy9g9YVgzrLts",
  authDomain: "ssafy-board.firebaseapp.com",
  databaseURL: "https://ssafy-board-default-rtdb.firebaseio.com",
  projectId: "ssafy-board",
  storageBucket: "ssafy-board.appspot.com",
  messagingSenderId: "1066933629320",
  appId: "1:1066933629320:web:d50f7c4074bb5610394a3d",
})

const db = firebaseApp.firestore()

// Export the database for components to use.
export { db }
