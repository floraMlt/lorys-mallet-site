<template>
  <div class="h-screen">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/nav/NavBar.vue'
</script>
