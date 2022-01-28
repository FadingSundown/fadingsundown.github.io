<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      image: 'af382d90-f0e9-432e-9776-3be9c5b123e6.jpg',
    },
    {
      size: 6,
      image: 'bd688bc4-9c13-4324-ae69-33e2ed6c256f.jpg',
    }
  ],
    [
      {
        size: 6,
        image: '7bbe5c7e-e433-4dec-95a0-ea7544f21df7.jpg',
      },
      {
        size: 6,
        image: '055874bd-843a-46a0-9c17-94b7d7f35b93.jpg',
      }
    ],
    [
      {
        size: 12,
        image: '2e6c28ee-ed8a-4935-98bb-c9d92eb822ed.jpg',
      }
    ]
];
</script>

<template>
  <BigTiles :max-height="600" :rows="rows" self="productfotografie"/>
</template>
