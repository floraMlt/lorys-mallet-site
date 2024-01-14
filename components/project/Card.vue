<template>
  <RouterLink :to="project._path">
    <div class="max-w-sm h-full rounded-xl overflow-hidden shadow-lg">
      <img
        class="w-full h-3/5"
        :src="project.imgCover"
        alt="Project image cover"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ project.title }}</div>
        <p class="text-gray-700 text-base">{{ project.description }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span
          v-for="(tag, index) in project.tags"
          :key="tag"
          :class="`bg-secondary-${index + 1}00`"
          class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
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
