<template>
  <div>
    <div
      class="border grid gap-4 p-6 rounded-lg select-none hover:shadow-lg transition-shadow"
      :class="[borderColor]"
    >
      <p class="break-all">{{ article.content }}</p>
      <p class="text-lg font-semibold justify-self-end">{{ article.name }}</p>
    </div>
  </div>
</template>

<script>
import _ from "lodash"

const COLOR_LIST = [
  "gray",
  "red",
  "blue",
  "yellow",
  "orange",
  "lime",
  "green",
  "purple",
  "teal",
  "indigo",
  "violet",
]

export default {
  name: "TheArticle",
  props: {
    article: {
      type: Object,
    },
  },
  computed: {
    borderColor() {
      return `border-${_.sample(COLOR_LIST)}-600`
    },
  },
}
</script>

<style></style>
