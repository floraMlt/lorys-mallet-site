<template>
  <div class="relative flex flex-col items-center p-24 z-0 max-w-screen-xl">
    <h1
      class="text-3xl text-primary-500 mb-10 flex text-center font-semibold font-primary"
    >
      Bonjour !
    </h1>

    <div class="flex items-center">
      <div>
        <p
          class="text-center font-semibold text-texts-normal mb-6 px-32 text-sm"
        >
          Je m'appelle Lorys Mallet, j'ai 20 ans, et ma passion pour les
          sciences, en particulier la biologie, guide mon parcours académique et
          professionnel. Ma personnalité se caractérise par ma persévérance et
          mon engagement dans tout ce que j'entreprends.
        </p>

        <div class="grid grid-cols-2 gap-12 w-full">
          <div>
            <p class="text-texts-normal text-justify text-sm">
              Fasciné par la compréhension du monde qui nous entoure et le
              fonctionnement du vivant, j'ai choisi de poursuivre une formation
              en biologie. Mon parcours académique a débuté avec une seconde
              générale au lycée Grand Air à Arcachon.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              Pour concrétiser ma passion et approfondir mes connaissances, j'ai
              opté pour un BAC STL (sciences et technologies de laboratoire
              spécialité biotechnologies) au lycée de la Mer à Biganos. Cette
              filière m'a permis de me familiariser avec les manipulations et de
              développer un intérêt grandissant pour la biologie et son
              application.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              Par la suite, je me suis intéressé à la formation BUT génie
              biologique parcours biologie médicale et biotechnologie (BMB).
              Pendant mon cursus, j'ai eu la chance de développer différentes
              compétences que je vais vous illustrer dans mon portfolio et j'ai
              aussi eu l'opportunité d'effectuer deux stages enrichissants : Un
              stage de 2 mois au sein de l'IOA à Bordeaux, au sein de l'équipe
              Voxcell. Un stage de 4 mois à Québec, au sein de l'hôpital Enfant
              Jésus.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              Cette formation et ces expériences ont renforcé ma conviction
              quant à mon projet professionnel futur en apportant une précieuse
              expérience théorique et pratique et en consolidant mes
              compétences.
            </p>
          </div>

          <div>
            <p class="text-texts-normal text-justify text-sm">
              En dehors de mon parcours académique et professionnel, ma vie est
              également enrichie par diverses expériences personnelles qui
              dévoilent ma polyvalence et mon équilibre de vie. La musculation
              occupe une place significative dans ma routine quotidienne, non
              seulement comme un moyen de maintenir ma santé physique, mais
              aussi comme une source de discipline et de détermination.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              La pêche représente une autre facette de mes loisirs. C'est une
              activité qui me permet de me connecter à la nature, de trouver la
              tranquillité d'esprit et de relever les défis que ce passe-temps
              apporte et qui renforce mon équilibre personnel. En dehors de ces
              activités, je tiens à consacrer du temps à mes proches et amis.
              Profiter de moments conviviaux, partager des expériences et
              cultiver des relations solides sont des aspects essentiels de ma
              vie quotidienne.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              Cet équilibre entre mes engagements professionnels et ces
              activités personnelles contribue à forger ma personnalité
              équilibrée et déterminée. En résumé, ma démarche académique et
              professionnelle est guidée par ma passion pour la biologie, ma
              persévérance et mon engagement.
            </p>
            <br />
            <p class="text-texts-normal text-justify text-sm">
              Les expériences que j'ai acquises ont renforcé ma conviction quant
              à mon avenir professionnel, et je suis prêt à apporter ces
              compétences et cette passion à de nouveaux défis.
            </p>
          </div>
        </div>
      </div>
    </div>

    <button
      class="bg-secondary-500 hover:bg-secondary-700 w-32 text-white font-semibold py-2 px-4 mt-10 mx-auto rounded transition-all"
      @click="openModal"
    >
      Voir mon CV
    </button>

    <div
      class="h-fit w-2/4 rounded-xl shadow-lg px-6 py-4 mt-8 mx-auto text-xl text-center hover:shadow-xl hover:cursor-pointer transition-all"
    >
      <p class="text-lg text-texts-normal">Contactez-moi par mail :</p>

      <a
        href="mailto:lorysmallet@gmail.com"
        class="text-lg text-primary-500 hover:text-primary-700 transition-all"
      >
        lorysmallet@gmail.com
      </a>
    </div>

    <Transition>
      <ModalCV v-if="isModalOpen" @close-modal="closeModal" />
    </Transition>
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
