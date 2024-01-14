<template>
    <div class="h-screen flex flex-col">
        <NavBar />
        <router-view class="pt-12"/>
    </div>
</template>
  
<script setup>
import NavBar from '@/components/NavBar.vue'
</script>