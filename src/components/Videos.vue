<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      youtube: 'https://www.youtube.com/embed/rJJr88iVoTc',
      text: 'Voor het  Immersive Media Design semester heb ik in groepsverband gewerkt aan het concept voor een Augmented Reality Museum App. De video heb ik bewerkt in Adobe After Effects.'
    },
  ],
  [
    {
      size: 6,
      youtube: 'https://www.youtube.com/embed/q-Obz_TbljE',
      text: 'Als hobby maak ik AMVs (Anime Music Videos) en MMVs (Manga Music Videos). Hierin wordt gebruik gemaakt van bestaand beeldmateriaal, dat wordt bewerkt zodat het past bij een gekozen muziek. Ik gebruik hiervoor de programma\'s Sony Vegas, Adobe After Effects en Clip Studio Paint.<br /><br /> De video die hier staat is één van de vele video\'s die ik heb gemaakt, mocht je het leuk vinden om te zien dan staan er op mijn kanaal nog meer.'
    },
  ],
];
</script>

<template>
  <BigTiles :max-height="600" :rows="rows" self="videobewerking"/>
</template>
