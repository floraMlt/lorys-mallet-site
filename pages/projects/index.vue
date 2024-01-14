<template>
  <h1 class="text-3xl text-primary-500">Projects</h1>
  <div class="py-2 flex">
    <ProjectCard v-for="project in projectList" :key="project.title" class="m-6" :project="project" />
  </div>
</template>
  
<script setup>
import ProjectCard from '~/components/ProjectCard.vue';


const { data: projectList } = useAsyncData('projectList', () => {
  return queryContent('/projects').find()
})
</script>