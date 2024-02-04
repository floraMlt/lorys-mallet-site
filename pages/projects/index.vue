<template>
  <ClientOnly>
    <h1
      class="text-3xl text-primary-500 font-primary font-semibold text-center pt-20 mb-8 z-0"
    >
      Mes projets
    </h1>
    <ProjectFilterBar @sortProjectByTag="sortProjects" />

    <Loader v-if="pending" />
    <div v-else class="py-3 px-20 flex row flex-wrap justify-center">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
        class="m-3"
      />
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref, computed } from "vue";

const { data: list, pending } = useAsyncData("projectList", () => {
  return queryContent("/projects").find();
});

const categoriesList = ref([]);

const sortProjects = (cat) => {
  const category = cat.target.innerText;
  toggleCategory(category);
};

const toggleCategory = (category) => {
  const index = categoriesList.value.indexOf(category);
  if (index === -1) {
    categoriesList.value.push(category);
  } else {
    categoriesList.value.splice(index, 1);
  }
};

const filteredProjects = computed(() => {
  return categoriesList.value.length
    ? list.value.filter((project) =>
        categoriesList.value.some((category) => project.tags.includes(category))
      )
    : list.value;
});
</script>
