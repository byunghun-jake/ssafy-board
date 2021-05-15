<template>
  <div id="app">
    <TheHeader />
    <TheForm />
    <div>
      {{ firebaseData }}
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue"
import TheForm from "./components/TheForm.vue"
import { db } from "./firebase.js"

// const config = {
//   // populate your firebase configuration data here.
//   apiKey: "AIzaSyAd91XyIOVpGE95-I-dGPZy9g9YVgzrLts",
//   authDomain: "ssafy-board.firebaseapp.com",
//   databaseURL: "https://ssafy-board-default-rtdb.firebaseio.com",
//   projectId: "ssafy-board",
//   storageBucket: "ssafy-board.appspot.com",
//   messagingSenderId: "1066933629320",
//   appId: "1:1066933629320:web:d50f7c4074bb5610394a3d",
// }

// firebase.initializeApp(config)

// const articlesRef = firebase.database().ref("articles")

export default {
  name: "App",
  components: {
    TheHeader,
    TheForm,
  },
  data() {
    return {
      firebaseData: [],
    }
  },
  created() {
    db.collection("articles")
      .get()
      .then((querySnapshot) => {
        const articles = []
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          articles.push(doc.data())
        })
        return articles
      })
      .then((articles) => {
        this.firebaseData = articles
      })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
