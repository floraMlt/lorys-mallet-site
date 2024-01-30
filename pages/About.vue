<template>
  <div
    class="relative flex flex-col items-center pt-24 px-20 z-0 max-w-screen-xl"
  >
    <h1
      class="text-3xl text-primary-500 mb-8 flex text-center font-semibold font-primary"
    >
      Bonjour !
    </h1>

    <div class="flex items-center">
      <div>
        <p class="font-semibold text-texts-normal mb-6">
          Je m'appelle Lorys Mallet, j'ai 20 ans et je suis passionné par les
          sciences, plus précisément la biologie et j'aimerais exercer un métier
          dans ce domaine.
        </p>

        <p class="text-texts-normal text-justify">
          Cela me correspond bien car je suis quelqu'un de persévérant et qui
          aime s'appliquer dans ce qu'il fait. Ce qui m'attire dans ce domaine,
          c'est d'essayer de comprendre ce qui nous entoure et le fonctionnement
          du vivant. Concernant ma scolarité, j'ai effectué une seconde générale
          au lycée Grand air à Arcachon. Par la suite, j'ai été intéressé pour
          mon année de 1 ere et de Terminale par un BAC STL (sciences et
          technologies de laboratoire) au lycée de la mer à Biganos car j'aime
          bien les manipulations et les sciences. Je trouvais que cette filière
          me correspondait parfaitement et dans celle-ci j'ai commencé à
          m'intéresser de plus en plus à la biologie et c'est ce qui m'a donné
          envie d'aller en BUT Génie Biologique afin de continuer d'en apprendre
          plus sur ce domaine qui me passionne. Durant mon cursus du BUT j'ai la
          chance d'effectuer 2 stages, 1 stage de 2 mois au sein de l'IOA a
          Bordeaux dans l'équipe Voxcell et un autre à Québec au sein de
          l'hôpital Enfant Jésus durant 4 mois qui m'ont apporter beaucoup
          d'expérience et de conviction concernant la solidification de mon
          projet pour mon avenir.
        </p>
      </div>
    </div>

    <button
      class="bg-secondary-500 hover:bg-secondary-700 w-28 text-white font-semibold py-2 px-4 mt-14 mx-auto rounded transition-all"
      @click="openModal"
    >
      Mon CV
    </button>

    <div
      class="h-fit w-2/4 rounded-xl shadow-lg px-6 py-4 mt-14 mx-auto text-xl text-center"
    >
      <p class="text-lg text-texts-normal">Contactez-moi par mail :</p>

      <a
        href="mailto:lorymallet@gmail.com"
        class="text-lg text-primary-500 hover:text-primary-700 transition-all"
      >
        lorymallet@gmail.com
      </a>
    </div>

    <ModalCV v-if="isModalOpen" @close-modal="closeModal" />
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
