<template>
  <div class="fixed h-12 w-full bg-white p-3">
    <div class="flex flex-row items-center justify-evenly w-96 mx=auto">
      <NavLink :route="{ name: 'HomePage' }" class="mr-5">Home</NavLink>
      <span class="text-primary-500 font-semibold">|</span>
      <NavLink :route="{ name: 'ProjectsPage' }" class="mr-5">Projects</NavLink>
      <span class="text-primary-500 font-semibold">|</span>
      <NavLink :route="{ name: 'AboutPage' }">About</NavLink>
    </div>
  </div>
</template>

<script setup>
import NavLink from './NavLink.vue'
</script>
