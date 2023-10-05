<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="container">  
    <RouterView />
  </div>
  

  
</template>

<style scoped>
  body {
    background-color: azure;
  }

  .container {
    background-color: white;
    box-shadow: 0 0 10px rgba(213, 16, 16, 0.1);
    padding: 5px;
    min-height: 100vh;
  }
</style>
