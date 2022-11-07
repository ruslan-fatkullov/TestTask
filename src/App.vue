<template>
  <div id="app">
    <!-- <TestTask2 msg="Welcome to Your Vue.js App"/> -->
    <MainWrapper/>
  </div>
</template>

<script>
//import TestTask1 from './components/TestTask1.vue'
// import TestTask2 from './components/TestTask2.vue'
import MainWrapper from "./components/v-main-wrapper.vue"

export default {
  name: 'App',
  components: {
    MainWrapper

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
