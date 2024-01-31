<template>
  <h1 class="text-3xl text-primary-500 pt-20 mb-8 text-center z-0">
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
</template>

<script setup>
import { ref } from "vue";

const { data: list, pending } = useAsyncData("projectList", () => {
  return queryContent("/projects").find();
});

const projectList = list;
const categoriesList = ref([]);

const sortProjects = (cat) => {
  if (!categoriesList?.value?.includes(cat.target.innerText)) {
    categoriesList.value.push(cat.target.innerText);
  } else {
    const index = categoriesList.value.indexOf(cat.target.innerText);

    if (index !== -1) {
      categoriesList.value.splice(index, 1);
    }
  }

  console.log("sort", list.value, projectList);

  projectList = list.filter((project) =>
    project.tags.includes(cat.target.innerText)
  );
  console.log("2", list.value, projectList);
};
</script>
