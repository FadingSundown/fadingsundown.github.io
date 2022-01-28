<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-white text-black text-white">
      <q-toolbar class="row q-my-md">
        <div class="col-md-4 col-6 items">
          <router-link to="over_mij" class="q-pr-md text-uppercase">Over mij</router-link>
          <router-link to="/" class="text-uppercase">Portfolio</router-link>
        </div>
        <div class="col-md-4 col-6 text-center text-h5 name">
          Melissa Oliemeulen
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="q-mx-lg">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>

@font-face {
  font-family: 'PlayfairDisplay';
  src: url('../public/assets/fonts/PlayfairDisplay-Regular.ttf') format('truetype');
}

@font-face {
  font-family: 'Dongle';
  src: url('../public/assets/fonts/Dongle-Regular.ttf') format('truetype');
}

* {
  font-family: Dongle;
  font-size: 1.07em;
  line-height: 1;
}

.name {
  font-family: PlayfairDisplay;
}

.items a {
  color: black;
  text-decoration: none;
  font-size: 1.2em;

  position: relative;
  top: 4px;
}
</style>
