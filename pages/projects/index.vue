<template>
  <ClientOnly>
    <h1
      class="sm:text-3xl text-primary-500 font-primary font-semibold text-center pt-20 mb-8 z-0 s:text-4xl"
    >
      Mes projets
    </h1>
    <ProjectFilterBar @sortProjectByTag="sortProjects($event)" />

    <Loader v-if="pending" />
    <div v-else class="py-5 sm:px-20 flex row flex-wrap justify-center s:px-8">
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
  if (selectedCategory.value.includes(category)) {
    selectedCategory.value = selectedCategory.value.filter(
      (cat) => cat !== category
    );
  } else {
    selectedCategory.value.push(category);
  }
};

const filteredProjects = computed(() => {
  if (selectedCategory.value.length === 0) {
    return list.value;
  }

  return list.value.filter((project) =>
    selectedCategory.value.includes(project.category)
  );
});
</script>
