<script lang="ts" setup>
import BigTiles from './BigTiles.vue';

const rows = [
  [
    {
      size: 6,
      image: 'cover-filterbubbel.png',
      text: 'Het ‘’filterbubbel’’ fenomeen. Misschien ken je deze term niet, maar als je op het internet zit dan heb je hier continue mee te maken. Algoritmes zorgen ervoor dat je content te zien krijgt die aansluiten bij jouw interesses. Fijn én leuk. maar helaas met onopgemerkte nadelen. Je blijft namelijk in je eigen bubbel en wordt niet meer geconfronteerd met mogelijk tegenstrijdige meningen. Om mensen bewust te maken van dit fenomeen hebben wij als groep het Leon project gemaakt. Deze ervaring liet mensen met behulp van video en hun eigen keuzes ervaren hoe zij in een filterbubbel leven. Ik heb in dit project onderzoek gedaan naar o.a. de Sleepwet, het belang van privacy op het internet en de  filterbubbel. Ook heb ik de video voor dit project gemaakt in Adobe After Effects.',
    },
    {
      size: 6,
      image: 'cover-stage.png',
      text: 'Voor mijn meewerkstage heb ik bij Bergtoys B.V. in Ede gewerkt op de afdeling Marketing. Hier had ik diverse taken, waaronder het maken en bewerken van advertenties, flyers, catalogus en social media posts. Ook heb ik bij de doelgroep onderzoek gedaan naar de user experience van de vernieuwde website, waarna ik vanuit onderzoeksresultaten aanbevelingen heb gedaan met verbeterpunten.',
    },
  ],
  [
    {
      size: 6,
      image: 'cover-bartdeboer.png',
      text: 'Bart de Boer, een boerderijspel met meerdere minigames om kinderen in groep 3 te leren rekenen. In groepsverband is dit concept bedacht en gebouwd tot een demo. Op de boerderij moesten kinderen o.a. eieren verzamelen (optellen) en koeien moesten vangen gebaseerd op hun vlekken (samenvoegen). Ik heb voor dit project voornamelijk onderzoek gedaan naar de huidige rekenmethodes in het basisonderwijs en de doelgroep.',
    },
    {
      size: 6,
      image: 'cover-brushm.png',
      text: 'Angst voor de tandarts. Dit gevoel kennen sommige kinderen en volwassen goed. Er is in groepsverband een concept gemaakt voor kinderen met angst voor de tandarts. Ik heb onder andere het onderzoek gedaan naar de rol van angst en adrenaline. Vanuit dit onderzoek is er een concept ontwikkeld zodat kinderen, doormiddel van bijvoorbeeld een Kinect of bewegingssensor, een tandenpoets spel kunnen spelen. In dit spel moeten ze tandplak wegpoetsen waardoor ze hun energie kwijtraken voordat ze bij de tandarts naar binnen gaan. De conceptvideo heb ik gemaakt in Adobe After Effects.',
    },
  ],
  [
    {
      size: 6,
      image: 'cover-cproject.png',
      text: 'Met aangeleverde informatie over budgetteren en administratie is er in groepsverband een storyboard gemaakt. Dit storyboard is uitgetekend op een whiteboard. Ik heb gefilmt, de video bewerkt en de voice-over toegevoegd in Adobe After Effects.',
    },
    {
      size: 6,
      image: 'cover-museumxplore.png',
      text: 'Geschiedenis beleven met behulp van Augmented Reality. Voor musea hebben wij een concept bedacht en uitgewerkt tot een applicatie als proof-of-concept. Dit project maakte gebruik van Augmented Reality om relevante figuren of karakters bij bijvoorbeeld schilderijen of foto\'s te tonen. Dit karakter gaf dan uitleg over zijn of haar object, om ze de bezoeker meer info te verschaffen in beeld en audio. In dit groepsproject heb ik gewerkt aan het concept, ook heb ik de video bewerkt in Adobe After Effects.',
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
  <BigTiles :rows="rows" max-height="600" self="/schoolprojecten"/>
</template>
