<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      image: 'beeldbewerking/SWI2016poster.jpg',
    },
    {
      size: 6,
      image: 'beeldbewerking/KK2-day_2017poster.jpg',
    }
  ],
  [
    {
      size: 6,
      image: 'beeldbewerking/2018-05_MEI-Winactie-Buzzy-Rekensom-1_kans.png',
    },
    {
      size: 6,
      image: 'beeldbewerking/ad-social-600x600-LRO-NL.png',
    },
  ],
  [
    {
      size: 6,
      image: 'beeldbewerking/BERG Advertentie - CBMC - 2018_MEI.png',
    },
  ]
];
</script>

<template>
  <BigTiles :max-height="600" :rows="rows" self="beeldbewerking"/>
</template>
