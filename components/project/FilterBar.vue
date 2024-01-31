<template>
  <div class="flex row flex-wrap justify-center items-center">
    <ProjectTag @click="sortProjectByTag"> Analyses </ProjectTag>
    <ProjectTag @click="sortProjectByTag"> Génie biologique </ProjectTag>
    <ProjectTag @click="sortProjectByTag">Biologie</ProjectTag>
    <ProjectTag @click="sortProjectByTag"> Biologie de la santé </ProjectTag>
    <ProjectTag @click="sortProjectByTag"> Biologie médicale </ProjectTag>
    <ProjectTag @click="sortProjectByTag"> Ingénierie moléculaire </ProjectTag>
  </div>
</template>

<script setup>
const emit = defineEmits(["sortProjectByTag"]);

const sortProjectByTag = (cat) => {
  emit("sortProjectByTag", cat);
};
</script>
