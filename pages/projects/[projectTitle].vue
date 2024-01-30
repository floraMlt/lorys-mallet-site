<template>
  <div class="relative h-full mt-12 z-0">
    <Loader v-if="pending" />

    <div v-else>
      <img :src="projectPage.imgCover" class="w-screen h-[150px] object-cover" />
      <div class="py-4 px-24">
        <router-link to="/projects">Retour aux projets</router-link>

        <h1 class="text-3xl text-primary-500 font-primary font-semibold text-center">{{ projectPage.title }}</h1>

        <div
          class="p-2 mx-2 my-4 flex row flex-wrap justify-center items-center"
        >
          <p v-for="(tag) in projectPage.tags"
          :key="tag"
          class="inline-block rounded-full bg-secondary-300 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {{ `#${tag}` }}
          </p>
        </div>
        
        <ContentDoc class="project-content" :path="projectPage._path" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const { path } = useRoute();

const { data: projectPage, pending } = await useAsyncData(
  `content-${path}`,
  () => {
    return queryContent().where({ _path: path }).findOne();
  }
);
</script>
