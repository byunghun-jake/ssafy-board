<template>
  <div class="container mx-auto mt-20">
    <div class="grid gap-6 justify-items-center">
      <h1 class="text-2xl font-bold">
        ✨감사의 마음을 담아 내용을 작성해주세요🎉
      </h1>
      <textarea
        class="py-2 px-4 border-2 border-red-200 rounded-xl resize-none outline-none focus:border-red-600 w-full"
        rows="10"
        type="text"
        v-model="formData.content"
      />
      <div class="flex items-center justify-between w-full px-4">
        <div>
          <input
            v-model="isAnonymous"
            type="checkbox"
            id="anonymous"
            class="mr-2"
          />
          <label for="anonymous">익명으로 글쓰기</label>
        </div>
        <div class="flex items-center">
          <label class="mr-2" for="name">이름</label>
          <input
            class="py-1 px-2 border border-gray-800 w-60 rounded"
            type="text"
            v-model="formData.name"
            placeholder="꼭 이름을 쓸 필요는 없어요!"
            :disabled="isAnonymous"
            id="name"
          />
        </div>
      </div>
      <div class="flex w-full pr-4 justify-end">
        <button
          @click="updateFirebase"
          class="py-2 px-6 border bg-blue-400 font-semibold text-lg text-white rounded-md"
        >
          작성하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"
// const documentPath = "board/article"

export default {
  name: "TheForm",
  data() {
    return {
      formData: {},
      isAnonymous: false,
      state: "loading",
      errorMessage: null,
    }
  },
  methods: {
    async updateFirebase() {
      try {
        this.formData = { ...this.formData, createdAt: new Date().getTime() }
        const articlesRef = db.collection("articles")
        await articlesRef.add(this.formData)
        this.formData.name = ""
        this.formData.content = ""
        this.formData.createdAt = null
        this.state = "synced"
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = "error"
      }
    },
  },
  watch: {
    isAnonymous: {
      handler(newVal) {
        if (newVal) {
          this.formData.name = "익명 학생"
        }
      },
    },
  },
}
</script>

<style></style>
