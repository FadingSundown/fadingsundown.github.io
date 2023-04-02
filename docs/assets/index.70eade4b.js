import{c,w as l,Q as x,r as f,o as t,a as g,b as y,d,e as A,f as M,g as h,h as p,i as b,j as _,F as j,k,t as I,l as u,m as $,n as V,p as E,q,s as O,u as B,v as L}from"./vendor.8c2bba03.js";const D=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}};D();var w=(o,e)=>{const a=o.__vccOpts||o;for(const[i,n]of e)a[i]=n;return a};const C={},H={class:"col-md-4 col-6 items"},N=h("Over mij"),Q=h("Portfolio"),R=d("div",{class:"col-md-4 col-6 text-center text-h5 name"}," Melissa Oliemeulen ",-1);function T(o,e){const a=f("router-link"),i=f("router-view");return t(),c(x,{view:"hHh lpR fFf"},{default:l(()=>[g(A,{elevated:"",class:"bg-white text-black text-white"},{default:l(()=>[g(y,{class:"row q-my-md"},{default:l(()=>[d("div",H,[g(a,{to:"over_mij",class:"q-pr-md text-uppercase"},{default:l(()=>[N]),_:1}),g(a,{to:"/",class:"text-uppercase"},{default:l(()=>[Q]),_:1})]),R]),_:1})]),_:1}),g(M,{class:"q-mx-lg"},{default:l(()=>[g(i)]),_:1})]),_:1})}var P=w(C,[["render",T]]);const S={key:0,class:"absolute-full text-subtitle2 flex flex-center caption"},F={key:1,class:"text q-py-sm q-px-lg text-center"},K=["innerHTML"],m=p({props:{self:null,rows:null,maxHeight:null},setup(o){return(e,a)=>{const i=f("router-link");return t(!0),b(j,null,_(o.rows,(n,s)=>(t(),b("div",{key:s,class:"row justify-evenly q-col-gutter-md q-mb-md"},[(t(!0),b(j,null,_(n,(r,z)=>(t(),c(i,{key:z,class:V(`col-md-${r.size} col-md-${r.size} col-12`),to:r.link||o.self},{default:l(()=>[r.image?(t(),c(k,{key:0,src:`/assets/${r.image}`,class:"tile"},{default:l(()=>[r.caption?(t(),b("div",S,I(r.caption),1)):u("",!0)]),_:2},1032,["src"])):u("",!0),r.youtube?(t(),b("div",F,[g($,{src:r.youtube,ratio:16/9},null,8,["src"])])):u("",!0),r.text?(t(),b("div",{key:2,class:"text q-py-sm q-px-lg text-center",innerHTML:r.text},null,8,K)):u("",!0)]),_:2},1032,["class","to"]))),128))]))),128)}}}),W=p({setup(o){const e=[[{size:4,image:"covers/schoolprojecten.png",caption:"Schoolprojecten",link:"schoolprojecten"},{size:4,image:"covers/beeldbewerking.jpg",caption:"Beeldbewerking",link:"beeldbewerking"},{size:4,image:"covers/productfotografie.png",caption:"Productfotografie",link:"productfotografie"}],[{size:4,image:"covers/fotografie.png",caption:"Fotografie",link:"fotografie"},{size:4,image:"covers/videobewerking.png",caption:"Videobewerking",link:"videobewerking"},{size:4,image:"covers/tekenen.png",caption:"Tekenen",link:"tekenen"}]];return(a,i)=>(t(),c(m,{rows:e,self:"/"}))}});var J="/assets/3d56107a-41f1-43e0-9f0a-8bed0a0e536a.jpg",G="/assets/d5a8f6b0-2cce-421e-b6bd-efb1be3a11c3.png";const U={},X={class:"row"},Y={class:"col-md-6 col-12"},Z=d("div",{class:"col-md-6 col-12 text-center q-px-lg q-pt-lg"},[d("p",null," Welkom op mijn website! Ik ben Melissa, een jonge professional in multimedia en communicatie ontwerp. Ik ben bij mij vorige werkgever veel bezig geweest met het produceren van online en offline toepassingen zoals (vak)bladen, folders, krantenartikelen, online magazines, websites en korte video\u2019s. Naast het maken van designs vind je mij in mijn vrije tijd vaak bezig met boulderen, gamen, schrijven, tekenen en fotografie. Ook maak ik graag wandelingen op de heide en het bos met mijn honden. "),d("p",null," Ik ben gepassioneerd over het vertellen van verhalen en het cre\xEBren van ontwerpen die mensen persoonlijk aanspreken. Voor mij is er niets leuker dan het zien van hoe een goed ontwerp mensen kan inspireren en aanzetten tot actie. Als jonge professional sta ik altijd klaar om te leren en te groeien in mijn vakgebied. Ik zoek naar nieuwe uitdagingen en kansen om mijn kennis en expertise uit te breiden. Kijk gerust rond op mijn website en neem gerust contact met mij op als je vragen hebt of als je ge\xEFnteresseerd bent in een samenwerking. Ik kan niet wachten om van je te horen! ")],-1),ee={class:"row q-mt-xl"},ne=d("div",{class:"col-md-6 offset-md-2 col-12"},[d("h3",{class:"text-center"},"Mijn contactgegevens staan op mijn CV. Ik kijk (letterlijk) uit naar je bericht!")],-1),te={class:"col-md-3 col-12 text-center"};function oe(o,e){return t(),c(E,{padding:"",class:"container"},{default:l(()=>[d("div",X,[d("div",Y,[g(k,{src:J,height:"400px"})]),Z]),d("div",ee,[ne,d("div",te,[g(k,{src:G,width:"313px"})])])]),_:1})}var ae=w(U,[["render",oe]]);const ie=p({setup(o){const e=[[{size:6,image:"4b85d461-4129-4953-9fc1-a5047ddeb3b1.jpg"},{size:6,image:"3ac70375-9078-4eb7-b265-5f985ae79b21.jpg"}],[{size:6,image:"33bfc0b3-cdd5-4811-9bbd-d09e61cb4ffa.jpg"},{size:6,image:"55e23cfb-0866-4b0f-85b7-8688d8407b41.jpg"},{size:6,image:"912ca24e-8cbd-418c-a025-2f61f6279548.jpg"},{size:6,image:"aded848a-afab-478b-a7a0-9e1e1ac95179.jpg"}],[{size:3,image:"6d03a092-bcba-419a-9138-25f875d08982.jpg"},{size:3,image:"99ab4e2e-a4f5-4679-95c4-d63ccd273c29.jpg"},{size:3,image:"582a70eb-f403-451e-b1c0-0eb7f4469298.jpg"},{size:3,image:"b0237041-b35a-450d-be7d-2ce77993b64b.jpg"}],[{size:12,image:"5c2cf545-99f6-4add-b773-4465afd5193f.jpg"}]];return(a,i)=>(t(),c(m,{rows:e,self:"fotografie","max-height":600}))}}),re=p({setup(o){const e=[[{size:6,image:"cover-filterbubbel.png",text:"Het \u2018\u2019filterbubbel\u2019\u2019 fenomeen. Misschien ken je deze term niet, maar als je op het internet zit dan heb je hier continue mee te maken. Algoritmes zorgen ervoor dat je content te zien krijgt die aansluiten bij jouw interesses. Fijn \xE9n leuk. maar helaas met onopgemerkte nadelen. Je blijft namelijk in je eigen bubbel en wordt niet meer geconfronteerd met mogelijk tegenstrijdige meningen. Om mensen bewust te maken van dit fenomeen hebben wij als groep het Leon project gemaakt. Deze ervaring liet mensen met behulp van video en hun eigen keuzes ervaren hoe zij in een filterbubbel leven. Ik heb in dit project onderzoek gedaan naar o.a. de Sleepwet, het belang van privacy op het internet en de  filterbubbel. Ook heb ik de video voor dit project gemaakt in Adobe After Effects."},{size:6,image:"cover-stage.png",text:"Voor mijn meewerkstage heb ik bij Bergtoys B.V. in Ede gewerkt op de afdeling Marketing. Hier had ik diverse taken, waaronder het maken en bewerken van advertenties, flyers, catalogus en social media posts. Ook heb ik bij de doelgroep onderzoek gedaan naar de user experience van de vernieuwde website, waarna ik vanuit onderzoeksresultaten aanbevelingen heb gedaan met verbeterpunten."}],[{size:6,image:"cover-bartdeboer.png",text:"Bart de Boer, een boerderijspel met meerdere minigames om kinderen in groep 3 te leren rekenen. In groepsverband is dit concept bedacht en gebouwd tot een demo. Op de boerderij moesten kinderen o.a. eieren verzamelen (optellen) en koeien moesten vangen gebaseerd op hun vlekken (samenvoegen). Ik heb voor dit project voornamelijk onderzoek gedaan naar de huidige rekenmethodes in het basisonderwijs en de doelgroep."},{size:6,image:"cover-brushm.png",text:"Angst voor de tandarts. Dit gevoel kennen sommige kinderen en volwassen goed. Er is in groepsverband een concept gemaakt voor kinderen met angst voor de tandarts. Ik heb onder andere het onderzoek gedaan naar de rol van angst en adrenaline. Vanuit dit onderzoek is er een concept ontwikkeld zodat kinderen, doormiddel van bijvoorbeeld een Kinect of bewegingssensor, een tandenpoets spel kunnen spelen. In dit spel moeten ze tandplak wegpoetsen waardoor ze hun energie kwijtraken voordat ze bij de tandarts naar binnen gaan. De conceptvideo heb ik gemaakt in Adobe After Effects."}],[{size:6,image:"cover-cproject.png",text:"Met aangeleverde informatie over budgetteren en administratie is er in groepsverband een storyboard gemaakt. Dit storyboard is uitgetekend op een whiteboard. Ik heb gefilmt, de video bewerkt en de voice-over toegevoegd in Adobe After Effects."},{size:6,image:"cover-museumxplore.png",text:"Geschiedenis beleven met behulp van Augmented Reality. Voor musea hebben wij een concept bedacht en uitgewerkt tot een applicatie als proof-of-concept. Dit project maakte gebruik van Augmented Reality om relevante figuren of karakters bij bijvoorbeeld schilderijen of foto's te tonen. Dit karakter gaf dan uitleg over zijn of haar object, om ze de bezoeker meer info te verschaffen in beeld en audio. In dit groepsproject heb ik gewerkt aan het concept, ook heb ik de video bewerkt in Adobe After Effects."}],[{size:12,image:"Design.jpg"}]];return(a,i)=>(t(),c(m,{rows:e,"max-height":"600",self:"/schoolprojecten"}))}}),se=p({setup(o){const e=[[{size:6,image:"beeldbewerking/SWI2016poster.jpg"},{size:6,image:"beeldbewerking/KK2-day_2017poster.jpg"}],[{size:6,image:"beeldbewerking/2018-05_MEI-Winactie-Buzzy-Rekensom-1_kans.png"},{size:6,image:"beeldbewerking/ad-social-600x600-LRO-NL.png"}],[{size:6,image:"beeldbewerking/BERG Advertentie - CBMC - 2018_MEI.png"}]];return(a,i)=>(t(),c(m,{"max-height":600,rows:e,self:"beeldbewerking"}))}}),ce=p({setup(o){const e=[[{size:6,image:"af382d90-f0e9-432e-9776-3be9c5b123e6.jpg"},{size:6,image:"bd688bc4-9c13-4324-ae69-33e2ed6c256f.jpg"}],[{size:6,image:"7bbe5c7e-e433-4dec-95a0-ea7544f21df7.jpg"},{size:6,image:"055874bd-843a-46a0-9c17-94b7d7f35b93.jpg"}],[{size:12,image:"2e6c28ee-ed8a-4935-98bb-c9d92eb822ed.jpg"}]];return(a,i)=>(t(),c(m,{"max-height":600,rows:e,self:"productfotografie"}))}}),de=p({setup(o){const e=[[{size:8,image:"f79be7c3-bd76-4169-95ce-f7137a31937d.png"},{size:4,image:"bb6c98b0-5385-4a2d-8d7c-e73d9574c89e.png"}],[{size:6,image:"3600e8ce-1491-48c4-a1c9-783f2bcd6334.png"},{size:6,image:"fd2c88e0-3e11-472b-abad-09db27b64c61.png"}],[{size:6,image:"f2143517-8b42-4dd9-a51a-29f016f21c38.png"},{size:6,image:"de183598-9e58-4506-be66-ebb01fcedf5f.png"}],[{size:6,image:"4ff34a7b-518f-44b0-8dc3-1d884d920b18.png"},{size:6,image:"photo_2022-01-27_23-54-05.jpg"}]];return(a,i)=>(t(),c(m,{"max-height":600,rows:e,self:"tekenen"}))}}),le=p({setup(o){const e=[[{size:6,youtube:"https://www.youtube.com/embed/rJJr88iVoTc",text:"Voor het  Immersive Media Design semester heb ik in groepsverband gewerkt aan het concept voor een Augmented Reality Museum App. De video heb ik bewerkt in Adobe After Effects."}],[{size:6,youtube:"https://www.youtube.com/embed/q-Obz_TbljE",text:"Als hobby maak ik AMVs (Anime Music Videos) en MMVs (Manga Music Videos). Hierin wordt gebruik gemaakt van bestaand beeldmateriaal, dat wordt bewerkt zodat het past bij een gekozen muziek. Ik gebruik hiervoor de programma's Sony Vegas, Adobe After Effects en Clip Studio Paint.<br /><br /> De video die hier staat is \xE9\xE9n van de vele video's die ik heb gemaakt, mocht je het leuk vinden om te zien dan staan er op mijn kanaal nog meer."}]];return(a,i)=>(t(),c(m,{"max-height":600,rows:e,self:"videobewerking"}))}});var ge=[{path:"/",component:W},{path:"/over_mij",component:ae},{path:"/fotografie",component:ie},{path:"/schoolprojecten",component:re},{path:"/beeldbewerking",component:se},{path:"/productfotografie",component:ce},{path:"/tekenen",component:de},{path:"/videobewerking",component:le}];const v=q(P);v.use(O,{plugins:{}});const pe=new B({history:L(),routes:ge});v.use(pe);v.mount("#app");