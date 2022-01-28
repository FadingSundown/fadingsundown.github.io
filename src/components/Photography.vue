<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      image: '4b85d461-4129-4953-9fc1-a5047ddeb3b1.jpg',
    },
    {
      size: 6,
      image: '3ac70375-9078-4eb7-b265-5f985ae79b21.jpg',
    }
  ],[

    {
      size: 6,
      image: '33bfc0b3-cdd5-4811-9bbd-d09e61cb4ffa.jpg',
    },
    {
      size: 6,
      image: '55e23cfb-0866-4b0f-85b7-8688d8407b41.jpg',
    },
    {
      size: 6,
      image: '912ca24e-8cbd-418c-a025-2f61f6279548.jpg',
    },
    {
      size: 6,
      image: 'aded848a-afab-478b-a7a0-9e1e1ac95179.jpg',
    },
  ],
    [
      {
        size: 3,
        image: '6d03a092-bcba-419a-9138-25f875d08982.jpg',
      },
      {
        size: 3,
        image: '99ab4e2e-a4f5-4679-95c4-d63ccd273c29.jpg',
      },
      {
        size: 3,
        image: '582a70eb-f403-451e-b1c0-0eb7f4469298.jpg',
      },
      {
        size: 3,
        image: 'b0237041-b35a-450d-be7d-2ce77993b64b.jpg',
      },
    ],
    [
      {
        size: 12,
        image: '5c2cf545-99f6-4add-b773-4465afd5193f.jpg',
      }
    ]
];
</script>

<template>
  <BigTiles :rows="rows" self="fotografie" :max-height="600" />
</template>
