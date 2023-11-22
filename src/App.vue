<script lang="ts" setup>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
// Ширина экрана: 1536
//HomePage.vue:14 Высота экрана: 803
</script>
<template>
  <div class="mainContainer">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<style scoped>

.mainContainer {
  margin: 0 0px;
}
</style>
