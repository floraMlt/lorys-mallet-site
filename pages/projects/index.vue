<template>
  <ClientOnly>
    <h1
      class="text-3xl text-primary-500 font-semibold font-primary pt-20 mb-8 text-center z-0"
    >
      Mes projets
    </h1>
    <ProjectFilterBar @sortProjectByTag="sortProjects" />

    <Loader v-if="pending" />

    <div v-else class="py-2 px-20 flex row flex-wrap justify-center">
      <ProjectCard
        v-for="project in projectList"
        :key="project.title"
        :project="project"
        class="m-3"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from "vue";

const { data: list, pending } = useAsyncData("projectList", () => {
  return queryContent("/projects").find();
});

let allProjects = list.value || [];

let projectList = ref([...allProjects]);
const categoriesList = ref([]);
const selectedCategory = ref("");

const sortProjects = (cat) => {
  selectedCategory.value = cat.target?.labels?.[0]?.innerText;

  const filteredList = selectedCategory.value?.length
    ? allProjects.filter(
        (project) => project.category === cat.target?.labels?.[0]?.innerText
      )
    : allProjects;

  projectList.value = [...filteredList];
};
</script>
