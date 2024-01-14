<template>
    <div>
        <img :src="projectPage.imgCover" class="w-full h-[150px] object-none" />
        <div class="p-4">
            <h1 class="text-xl">{{ projectPage.title }}</h1>
            <div class="border border-gray-300 rounded-md p-2 mx-2 my-4 shadow-md bg-gray-200">
                <p>{{ projectPage.description }}</p>
            </div>
            <ContentDoc class="project-content">
                <template #content>
                    {{ projectPage.content }}
                </template>
            </ContentDoc>
        </div>
    </div>
</template>

<script setup>
const { path } = useRoute()

const { data: projectPage } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
</script>