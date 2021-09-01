<template>
  <Header />
  <div id="page">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<style lang="scss">
@import "./styles/styles";
#app {
  width: 100%;
  height: 100%;
}
#page {
  width: 100%;
  height: 100%;
}
</style>
