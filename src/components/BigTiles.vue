<script lang="ts" setup>
type Row = [
  Item[]
];

type Item = {
  size: number;
  text: string;
  image?: string;
  youtube?: string;
};

import {defineProps} from 'vue';

defineProps<{
  self: string,
  rows: Row[],
  maxHeight: number
}>();
</script>

<template>
  <div v-for="(row, rowIndex) in rows" :key="rowIndex" class="row justify-evenly q-col-gutter-md q-mb-md">
    <router-link v-for="(item, itemIndex) in row"
                 :key="itemIndex"
                 :class="`col-md-${item.size} col-md-${item.size} col-12`"
                 :to="item.link || self">
      <template v-if="item.image">
        <q-img :src="`/assets/${item.image}`" class="tile">
          <div v-if="item.caption" class="absolute-full text-subtitle2 flex flex-center caption">
            {{ item.caption }}
          </div>
        </q-img>
      </template>
      <div v-if="item.youtube" class="text q-py-sm q-px-lg text-center">
        <q-video :src="item.youtube" :ratio="16/9" />
      </div>
      <div v-if="item.text" class="text q-py-sm q-px-lg text-center" v-html="item.text"></div>
    </router-link>

  </div>
</template>

<style>
.tile:not(:hover) .text-subtitle2 {
  display: none;
}

.caption {
  font-size: 1.4em;
  text-transform: uppercase;
}

a {
  text-decoration: none;
}

.text {
  text-decoration: none;
  color: black;
  font-size: 1.4em;
  line-height: 0.8;
}
</style>
