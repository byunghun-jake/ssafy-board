<template>
  <div class="container mx-auto mt-20 px-10">
    <div class="grid gap-6 justify-items-center">
      <h1 class="text-2xl font-bold">
        ✨감사의 마음을 담아 내용을 작성해주세요🎉
      </h1>
      <div class="w-full">
        <textarea
          class="py-2 px-4 border-2  rounded-xl resize-none outline-none  transition w-full"
          :class="{
            'border-green-200': !error.contentError,
            'focus:border-green-600': !error.contentError,
            'border-red-200': error.contentError,
          }"
          rows="10"
          type="text"
          @input="resetContentError"
          v-model="formData.content"
        />
        <p class="text-red-500 text-sm font-semibold">
          {{ error.contentError }}
        </p>
      </div>
      <div
        class="flex flex-col md:flex-row items-center justify-between w-full px-4"
      >
        <div class="mb-2 md:mb-0">
          <input
            v-model="isAnonymous"
            type="checkbox"
            id="anonymous"
            class="mr-2"
            @change="resetNameError"
          />
          <label for="anonymous">익명으로 글쓰기</label>
        </div>
        <div>
          <div class="flex items-center">
            <label class="mr-2" for="name">이름</label>
            <input
              class="py-1 px-2 border  outline-none w-60 rounded"
              :class="{
                'border-gray-200': !error.nameError,
                'border-red-200': error.nameError,
              }"
              type="text"
              @input="resetNameError"
              v-model="formData.name"
              placeholder="꼭 이름을 쓸 필요는 없어요!"
              :disabled="isAnonymous"
              id="name"
            />
          </div>
          <p class="text-red-500 text-sm font-semibold text-right">
            {{ error.nameError }}
          </p>
        </div>
      </div>
      <div class="flex w-full pr-4 justify-end">
        <button
          @click="updateFirebase"
          class="py-2 px-6 border bg-blue-400 hover:bg-blue-600 transition font-semibold text-lg text-white rounded-md"
        >
          작성하기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase"

export default {
  name: "TheForm",
  data() {
    return {
      formData: {
        content: "",
        name: "",
      },
      isAnonymous: false,
      state: "loading",
      errorMessage: null,
      error: {
        nameError: "",
        contentError: "",
      },
    }
  },
  methods: {
    async updateFirebase() {
      if (!this.formData.name.trim() || !this.formData.content.trim()) {
        if (!this.formData.name.trim()) {
          this.error.nameError = "이름을 입력하세요."
        }
        if (!this.formData.content.trim()) {
          this.error.contentError = "내용을 입력하세요."
        }
        return
      }
      try {
        this.formData = { ...this.formData, createdAt: new Date().getTime() }
        const articlesRef = db.collection("articles")
        await articlesRef.add(this.formData)
        this.formData.name = ""
        this.formData.content = ""
        this.formData.createdAt = null
        this.state = "synced"
        alert("글이 작성되었습니다! 감사합니다 ㅎㅎ")
        this.$router.push({ name: "Home" })
      } catch (error) {
        this.errorMessage = JSON.stringify(error)
        this.state = "error"
      }
    },
    resetContentError() {
      this.error.contentError = ""
    },
    resetNameError() {
      this.error.nameError = ""
    },
  },
  watch: {
    isAnonymous: {
      handler(newVal) {
        if (newVal) {
          this.formData.name = "익명 학생"
        } else {
          this.formData.name = ""
        }
      },
    },
  },
}
</script>

<style></style>
