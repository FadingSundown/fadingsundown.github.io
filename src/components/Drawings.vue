<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 8,
      image: 'f79be7c3-bd76-4169-95ce-f7137a31937d.png',
    },
    {
      size: 4,
      image: 'bb6c98b0-5385-4a2d-8d7c-e73d9574c89e.png',
    }
  ],
  [
    {
      size: 6,
      image: '3600e8ce-1491-48c4-a1c9-783f2bcd6334.png',
    },
    {
      size: 6,
      image: 'fd2c88e0-3e11-472b-abad-09db27b64c61.png',
    },
  ],
  [
    {
      size: 6,
      image: 'f2143517-8b42-4dd9-a51a-29f016f21c38.png',
    },
    {
      size: 6,
      image: 'de183598-9e58-4506-be66-ebb01fcedf5f.png',
    },
  ],
  [
    {
      size: 6,
      image: '4ff34a7b-518f-44b0-8dc3-1d884d920b18.png',
    },
    {
      size: 6,
      image: 'photo_2022-01-27_23-54-05.jpg',
    }
  ],
  [
    {
      size: 12,
      image: 'a42b34d1-ccff-4dea-8cd4-36cf07b8cc8f.png',
    },
  ]
];
</script>

<template>
  <BigTiles :max-height="600" :rows="rows" self="tekenen"/>
</template>
