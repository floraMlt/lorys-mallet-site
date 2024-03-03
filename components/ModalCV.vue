<template>
  <div class="modal-cv fixed z-20 p-4 bg-secondary-300 rounded-xl">
    <span
      class="z-30 absolute right-7 cursor-pointer text-secondary-100 text-3xl hover:text-secondary-400 transition-all"
      @click="$emit('closeModal')"
    >
      &times;
    </span>

    <img src="../assets/img/mallet-lorys-cv.webp" alt="cv" class="max-w-full" />
  </div>
</template>

<script setup></script>

<style>
.modal-cv {
  top: 8vh;
}

.modal-cv img {
  height: 86vh;
}
</style>
