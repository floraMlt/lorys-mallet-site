<template>
  <div
    class="max-w-82 h-auto py-1 px-3 m-1 text-texts-normal select-none rounded-full hover:bg-gray-300 hover:cursor-pointer transition-all"
    :style="{ backgroundColor: isActive ? '#84c89c' : '#e5e7eb' }"
    @click="sortProjectByTag"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(false);

const emit = defineEmits(["sortProjectByTag"]);

const sortProjectByTag = (cat) => {
  emit("sortProjectByTag", cat);
  isActive.value = !isActive.value;
};
</script>
