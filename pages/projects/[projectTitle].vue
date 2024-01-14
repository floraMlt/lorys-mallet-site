<template>
  <div class="relative h-full pt-12">
    <Loader v-if="pending" />

    <div v-else>
      <img :src="projectPage.imgCover" class="w-full h-[150px] object-none" />
      <div class="p-4">
        <h1 class="text-xl">{{ projectPage.title }}</h1>
        <div
          class="border border-gray-300 rounded-md p-2 mx-2 my-4 shadow-md bg-gray-200"
        >
          <p>{{ projectPage.description }}</p>
        </div>
        <ContentDoc class="project-content">
          <template #content>
            {{ projectPage.content }}
          </template>
        </ContentDoc>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const { path } = useRoute();

const {
  data: projectPage,
  pending,
  error,
} = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
