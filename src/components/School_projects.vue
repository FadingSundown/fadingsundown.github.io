<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      image: 'cover-filterbubbel.png',
      text: 'Semester: Experience design.<br />\n' +
          'Ik heb in groepsverband het Leon project gemaakt.<br />\n' +
          'Deze ervaring liet gebruikers met behulp van video en hun eigen keuzes ervaren hoe zij in een filterbubbel leven. Ik heb in dit project onderzoek gedaan naar o.a. de Sleepwet, het belang van privacy op het internet en het \'\'filterbubbel\'\' fenomeen. Ook heb ik de video voor dit project gemaakt in Adobe After Effects.\n',
    },
    {
      size: 6,
      image: 'cover-stage.png',
      text: 'Meewerkstage: Bergtoys.<br />\n' +
          'Voor mijn meewerkstage heb ik bij Bergtoys gewerkt op de Marketing afdeling. Hier had ik diverse taken, waaronder het maken van advertenties, flyers, catalogus en social media posts.<br />\n' +
          'Ook heb ik bij de doelgroep onderzoek gedaan naar de user experience van de vernieuwde website, waarna ik vanuit onderzoeksresultaten ook aanbevelingen heb gedaan met verbeterpunten.',
    },
  ],
  [
    {
      size: 6,
      image: 'cover-bartdeboer.png',
      text: 'Semester: Serious game design.<br />\n' +
          'Ik heb in groepsverband het spel Bart de Boer ontwikkeld, met meerdere minigames om kinderen in groep 3 te leren rekenen. Op de boerderij moesten kinderen o.a. eieren verzamelen (optellen) en koeien moesten vangen gebaseerd op hun vlekken (samenvoegen). Ik heb voor dit project voornamelijk onderzoek gedaan naar huidige rekenmethodes in het basisonderwijs en de doelgroep.\n',
    },
    {
      size: 6,
      image: 'cover-brushm.png',
      text: 'Semester: Serious game design<br />\n' +
          'Er is ingroepsverband een concept gemaakt voor kinderen met angst voor de tandarts. Ik heb onder andere het onderzoek gedaan naar de rol van angst en adrenaline. Vanuit dit onderzoek hebben wij een concept ontwikkeld dat kinderen doormiddel van bijvoorbeeld een Kinect of bewegingssensor kunnen spelen. In dit spel moeten ze tandplak wegpoetsen en raken ze hun energie kwijt. De conceptvideo heb ik gemaakt in Adobe After Effects.\n',
    },
  ],
  [
    {
      size: 6,
      image: 'cover-cproject.png',
      text: 'Semester: C-Project.<br />\n' +
          'Met aangeleverde informatie heb ik in groepsverband een video gefilmd en bewerkt over budgetteren en administratie. Deze video was gemaakt met een Canon camera en bewerkt in Adobe After Effects.\n',
    },
    {
      size: 6,
      image: 'cover-museumxplore.png',
      text: 'Semester: Immersive Media Design.<br />\n' +
          'Voor musea hebben wij een concept gemaakt en uitgewerkt tot een applicatie als proof-of-concept.<br />\n' +
          'Dit project maakte gebruik van Augmented Reality om relevante figuren bij bijvoorbeeld schilderijen of foto\'s te tonen. Dit historische figuur gaf dan uitleg over zijn/haar object.\n',
    },
  ],
    [
      {
        size: 12,
        image: 'Design.jpg',
      },
    ]
];
</script>

<template>
  <BigTiles :rows="rows" self="/schoolprojecten"/>
</template>
