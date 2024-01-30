<template>
  <transition>
    <div
      class="modal-cv z-20 absolute top-0 left-1/3 p-4 bg-secondary-300 rounded-xl"
    >
      <span
        class="z-30 absolute right-7 cursor-pointer text-secondary-100 text-3xl"
        @click="$emit('closeModal')"
      >
        &times;
      </span>
      <img src="../assets/img/illu1.jpeg" alt="cv" class="max-w-full" />
    </div>
  </transition>
</template>

<script setup></script>

<style>
.modal-cv {
  top: 8vh;
  z-index: 5;
}

.modal-cv img {
  height: 86vh;
}
</style>
