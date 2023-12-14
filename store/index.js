import Vue from "vue"
import { v4 as uuidv4 } from "uuid";


export const state = () => ({
  isMobile: false,
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Sistemista per più di vent’anni e appassionato di tecnologie web sin dai primi anni 2000, con una profonda esperienza nello sviluppo di applicazioni web dinamiche in php e database relazionali, oltre che nell’approfondimento del linguaggio Javascript e dell’interazione con il backend attraverso Ajax. Dal 2018 ho abbracciato lo sviluppo di Node.js e delle librerie Vuejs e React, nonchè del framework Nuxt.js. Alla ricerca di nuovi stimoli e spunti, curioso e attento agli ultimi sviluppi che l'IA sta facendo in molti campi, sopratutto nellla nuova offerta di formidabili strumenti di sviluppo tutti in itinere.",
    },
    {
      id: uuidv4(),
      /*bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",*/
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Mobile Applicaiton",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  projectsGridSettings: {
    projectsHeading: "Projects Portfolio",
    projectsDescription: "Some of the projects I have successfully completed",
  },
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Twitter",
      icon: "twitter",
      url: "https://twitter.com/realstoman",
    },
    {
      id: uuidv4(),
      name: "Linkedin",
      icon: "linkedin",
      url: "https://linkedin.com/in/realstoman",
    },
    {
      id: uuidv4(),
      name: "Youtube",
      icon: "youtube",
      url: "https://youtube.com/c/realstoman",
    },
  ],
  iconsSkills: [
    'html5-plain',
    'css3-plain',
    'javascript-plain',
    'typescript-plain',
    'php-plain',
    'nodejs-plain',
    'express-original',
    'php-plain',
    'github-original',
    'git-plain',
    'bitbucket-original',
    'vuejs-plain',
    'nuxtjs-plain',
    'codeigniter-plain',
    'laravel-plain',
    'symfony-original',
    'mysql-plain'
  ]
})

export const getters = {
  _getter: state => items => state[items]
}

export const mutations = {
  commitAppState(state, { key, value }) {
    state[key] = value
  }
}
