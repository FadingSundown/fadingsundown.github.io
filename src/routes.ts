import Overview from './components/Overview.vue';
import AboutMe from './components/AboutMe.vue';
import Photography from './components/Photography.vue';
import School_projects from './components/School_projects.vue';
import Editing from './components/Editing.vue';
import Products from './components/Products.vue';
import Drawings from './components/Drawings.vue';
import Videos from './components/Videos.vue';

export default [
  { path: '/', component: Overview },
  { path: '/over_mij', component: AboutMe },
  { path: '/fotografie', component: Photography },
  { path: '/schoolprojecten', component: School_projects },
  { path: '/beeldbewerking', component: Editing },
  { path: '/productfotografie', component: Products },
  { path: '/tekenen', component: Drawings },
  { path: '/videobewerking', component: Videos }
]
