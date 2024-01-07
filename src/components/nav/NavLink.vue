<template>
  <router-link
    :to="route"
    class="text-gray-600 hover:text-primary-500 hover:font-semibold transition-all"
  >
    <slot></slot>
  </router-link>
</template>

<script setup>
defineProps({
  route: Object
})
</script>
