<template>
  <div
    class="max-w-82 h-auto px-3 m-1 flex items-center text-texts-normal hover:cursor-pointer transition-all"
    @click="sortProjectByTag"
  >
    <input
      type="checkbox"
      :id="id"
      :name="id"
      class="mr-1 accent-secondary-400"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["sortProjectByTag"]);

const sortProjectByTag = (cat) => {
  emit("sortProjectByTag", cat);
};
</script>
