<template>
  <ClientOnly>
    <h1
      class="text-3xl text-primary-500 font-primary font-semibold text-center pt-20 mb-8 z-0"
    >
      Mes projets
    </h1>
    <ProjectFilterBar @sortProjectByTag="sortProjects($event)" />

    <Loader v-if="pending" />
    <div v-else class="py-5 px-20 flex row flex-wrap justify-center">
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

const selectedCategory = ref([]);

const sortProjects = (cat) => {
  const category = cat.target?.labels?.[0]?.innerText;

  if (category) {
    toggleCategory(category);
  }
};

const toggleCategory = (category) => {
  selectedCategory.value = selectedCategory.value === category ? "" : category;
};

const filteredProjects = computed(() => {
  return selectedCategory.value
    ? list.value.filter(
        (project) => selectedCategory.value === project.category
      )
    : list.value;
});
</script>
