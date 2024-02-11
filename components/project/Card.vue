<template>
  <RouterLink :to="project._path">
    <div
      class="max-w-sm h-min rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <img
        class="w-full h-3/5"
        :src="project.imgCover"
        alt="Project image cover"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ project.title }}</div>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="inline-block rounded-full bg-secondary-300 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
