<template>
  <div
    class="max-w-82 h-auto py-1 px-2 m-1 bg-gray-200 text-texts-normal rounded hover:bg-gray-300 hover:cursor-pointer transition-all"
    :style="{ backgroundColor: isActive.value && '#84c89c' }"
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
  isActive.value = !isActive.value;
  emit("sortProjectByTag", cat);
};
</script>
