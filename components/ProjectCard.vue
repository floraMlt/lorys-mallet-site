<template>
    <RouterLink :to="project._path">
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" :src="project.imgCover" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{{ project.title }}</div>
                <p class="text-gray-700 text-base">{{ project.description }}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span v-for="tag in project.tags" :key="tag"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                        tag }}</span>
            </div>
        </div>
    </RouterLink>
</template>

<script setup>
defineProps({
    project: Object,
})
</script>
