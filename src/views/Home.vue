<template>
  <div class="container mx-auto my-10 px-6">
    <div class="img-container my-4 flex items-center justify-center">
      <span class="text-6xl font-bold">교수님</span>
      <img class="h-80" src="@/assets/logo.png" alt="" />
      <span class="text-6xl font-bold">감사합니다❤</span>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <TheArticle
        v-for="article in articles"
        :key="article.createdAt"
        :article="article"
      />
    </ul>
    <footer>
      <div class="container mx-auto p-10 flex justify-center">
        <span class="text-2xl font-bold">지금 우시면 됩니다!</span>
      </div>
    </footer>
  </div>
</template>

<script>
import TheArticle from "@/components/TheArticle"
import { db } from "@/firebase.js"

export default {
  name: "Home",
  components: { TheArticle },
  data() {
    return {
      articles: [],
    }
  },
  created() {
    db.collection("articles")
      .get()
      .then((querySnapshot) => {
        const articles = []
        querySnapshot.forEach((doc) => {
          articles.push(doc.data())
        })
        return articles
      })
      .then((articles) => {
        this.articles = articles.sort((a, b) => {
          return a.createdAt - b.createdAt
        })
      })
  },
}
</script>

<style scoped>
.img-container {
  font-family: "Poor Story", cursive;
  letter-spacing: 0.2em;
}
</style>
