<template>
  <div class="container mx-auto my-10">
    <div class="my-4">
      <img class="mx-auto h-80" src="@/assets/logo.png" alt="" />
    </div>
    <ul class="grid grid-cols-4 gap-6">
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
