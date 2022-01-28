<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 4,
      image: 'covers/schoolprojecten.png',
      caption: 'Schoolprojecten',
      link: 'schoolprojecten'
    },
    {
      size: 4,
      image: 'covers/beeldbewerking.jpg',
      caption: 'Beeldbewerking',
      link: 'beeldbewerking'
    },
    {
      size: 4,
      image: 'covers/productfotografie.png',
      caption: 'Productfotografie',
      link: 'productfotografie'
    },
  ],
  [
    {
      size: 4,
      image: 'covers/fotografie.png',
      caption: 'Fotografie',
      link: 'fotografie'
    },

    {
      size: 4,
      image: 'covers/videobewerking.png',
      caption: 'Videobewerking',
      link: 'videobewerking'
    },
    {
      size: 4,
      image: 'covers/tekenen.png',
      caption: 'Tekenen',
      link: 'tekenen'
    },
  ],
];
</script>

<template>
  <BigTiles :rows="rows" self="/"/>
</template>
