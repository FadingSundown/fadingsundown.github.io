<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    { size: 3 },
    {
      size: 6,
      youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rJJr88iVoTc" frameborder="0" allowfullscreen></iframe>',
      text: 'Semester: Immersive Media Design.<br />\n' +
          'Deze video heb ik bewerkt in Adobe After Effects.'
    },
  ],
  [
    {size: 3},
    {
      size: 6,
      youtube: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q-Obz_TbljE" frameborder="0" allowfullscreen></iframe>',
      text: 'Hobby.<br />\n' +
          'Als hobby maak ik soms AMVs (Anime Music Videos) en MMVs (Manga Music Videos).  Hierin maak je gebruik van bestaand beeldmateriaal, dat wordt bewerkt zodat het past bij een gekozen muziek. Ik gebruik hiervoor de programma\'s Sony Vegas, Adobe After Effects en Clip Studio Paint.<br />\n' +
          '<br />\n' +
          'De video die hier staat is één van de vele video\'s die ik heb gemaakt, mocht je het leuk vinden om te zien dan staan er op mijn kanaal nog meer.'
    },
  ],
];
</script>

<template>
  <BigTiles :max-height="600" :rows="rows" self="videobewerking"/>
</template>
