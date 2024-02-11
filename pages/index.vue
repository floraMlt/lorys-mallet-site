<template>
  <div
    class="relative flex flex-col items-center pt-32 px-24 z-0 max-w-screen-xl"
  >
    <div class="flex">
      <img
        src="../assets/img/img-hp.jpg"
        alt="illustration biology"
        class="max-h-80 mr-10 rounded-3xl"
      />

      <div>
        <div>
          <h1
            class="text-6xl text-primary-500 mb-6 flex font-semibold font-primary"
          >
            Lorys Mallet
          </h1>

          <h3
            class="text-3xl text-primary-500 mb-8 flex font-semibold font-primary"
          >
            Étudiant en biologie
          </h3>

          <h5 class="w-3/4 text-s text-texts-normal mb-14 flex font-secondary">
            Je suis passionné par les sciences et plus précisément par la
            biologie. Venez découvrir mes projets !
          </h5>
        </div>

        <button
          class="bg-secondary-500 hover:bg-secondary-700 w-28 text-white font-semibold py-2 px-4 mr-4 rounded transition-all"
          @click="openModal"
        >
          Mon CV
        </button>

        <Transition>
          <ModalCV v-if="isModalOpen" @close-modal="closeModal" />
        </Transition>

        <router-link to="/projects">
          <button
            class="bg-secondary-500 hover:bg-secondary-700 w-30 text-white font-semibold py-2 px-4 rounded transition-all"
          >
            Mes projets
          </button>
        </router-link>
      </div>
    </div>

    <div
      class="h-fit w-2/4 rounded-xl shadow-lg px-6 py-4 mt-16 mx-auto text-xl text-center hover:shadow-xl hover:cursor-pointer transition-all"
    >
      <p class="text-lg text-texts-normal">Contactez-moi par mail :</p>

      <a
        href="mailto:lorysmallet@gmail.com"
        class="text-lg text-primary-500 hover:text-primary-600 transition-all"
      >
        lorysmallet@gmail.com
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ModalCV from "@/components/ModalCV.vue";

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
