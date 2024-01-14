<template>
  <h1 class="text-3xl text-primary-500 pt-20 text-center pt-20">My projects</h1>

  <Loader v-if="pending" />
  <div v-else class="py-2 flex">
    <ProjectCard
      v-for="project in projectList"
      :key="project.title"
      :project="project"
      class="m-6"
    />
  </div>
</template>

<script setup>
const { data: projectList, pending } = useAsyncData("projectList", () => {
  return queryContent("/projects").find();
});
</script>
