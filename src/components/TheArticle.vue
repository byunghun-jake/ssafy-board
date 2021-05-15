<template>
  <div>
    <div
      class="border grid gap-4 p-6 rounded-lg"
      :class="{ 'border-gray-600': true }"
    >
      <p class="break-all">{{ article.content }}</p>
      <p class="text-lg font-semibold justify-self-end">{{ article.name }}</p>
    </div>
  </div>
</template>

<script>
// import _ from "lodash"

// const COLOR_LIST = ["red", "blue", "purple", "yellow"]

export default {
  name: "TheArticle",
  props: {
    article: {
      type: Object,
    },
  },
  computed: {
    borderStyle() {
      return {}
    },
  },
}
</script>

<style></style>
