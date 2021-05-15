<template>
  <div id="app">
    <TheHeader />
    <div id="nav" class="w-full flex flex-col md:flex-row justify-center p-6">
      <router-link :to="{ name: 'Home' }" class="py-2 px-4 text-lg text-center">
        여기서 보시면 됩니다!
      </router-link>
      <router-link :to="{ name: 'Form' }" class="py-2 px-4 text-lg text-center">
        여기서 쓰시면 됩니다!
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue"

export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
