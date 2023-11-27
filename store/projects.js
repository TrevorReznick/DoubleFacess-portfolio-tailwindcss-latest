
import Vue from 'vue'
import { v4 as uuidv4 } from 'uuid'


export const state = () => ({
    my_projects: [
        {
            obj_name: 'immobiliare-di-falco',
            title: 'Immobiliare di Falco',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdb',
            category: 'Real Estate App',
            img: require('static/img/projects/difalco-website.png'),
            url: 'https://www.difalcoimmobiliare.it'
        },
        {
            obj_name: 'immobiliare-di-falco-cp',
            title: 'CP Immobiliare di Falco',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdc',
            category: 'CMS Agenzia Immobilare',
            img: require('static/img/projects/difalco-cp-auth.png'),
            url: 'https://www.difalcoimmobiliare.it/admin'
        },
        {
            obj_name: 'shopping-play',
            title: 'Shopping Play',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdy',
            category: 'Web App',
            img: require('static/img/projects/shop-home.png'),
            url: 'https://shoppingplay.netlify.app/'
        },
        {
            obj_name: 'node-backend',
            title: 'Nodejs PWA Notification System',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8ccc99',            
            category: 'Backend/Nodejs',
            img: require('static/img/projects/domini-home.png'),
            url: 'https://www.dominiacency.com'
        },
        {
            obj_name: 'es5-framework',
            title: 'Gestionale Supremacy',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdm',
            category: 'Mobile Application',
            img: require('static/img/projects/suprem-dashb.png'),
            url: 'https://www.dominiacency.com'
        },
        {
            obj_name: 'my-todo',
            title: 'My Todo',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbb',      
            category: 'Web Application',
            img: require('static/img/projects/todo1.png'),
            url: 'https://todolist-96d98d.netlify.app/app'
        },
        {
            obj_name: 'es6-porting-code',
            title: 'ES6 Javascript Porting',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbc',
            category: 'Web Application',
            img: require('static/img/projects/todo1.png'),
            url: 'https://www.difalcoimmobiliare.it'
        },
        {
            obj_name: 'open-jajax',
            title: 'Open jAjax Demo',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbd',
            category: 'Web Application',
            img: require('static/img/projects/todo1.png'),
            url: 'https://www.difalcoimmobiliare.it',
        }        
        
    ],
    projects_details: [
        {
            obj_name: 'immobiliare-di-falco',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdb',
            technologies: [
                "Javascript",
                "Php",
                "Auth0",
                "Nuxt.js",
                "Codeigniter",
                "Bootstrap5"
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                //img: require('static/img/projects/difalco-website-list.png'),
                img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }

        },
        {
            obj_name: 'immobiliare-di-falco-cp',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdc',
            technologies: [
                "Vuejs",
                "Codeigniter",
                "Auth0",
                "Bootstrap"
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }
        },
        {
            obj_name: 'shopping-play',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdy',
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            },
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Vuejs",
                "Vuetify",
                "Vuex",
                "IndexedDb"
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }
        },
        {
            obj_name: 'node-backend',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8ccc99',
            technologies: [
                "Javascript",
                "Nodejs",
                "Cron",
                "Nodemailer",
                "PWA",
                "React",
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }
        },
        {
            obj_name: 'es5-framework',
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccdm',
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Nuxt.js",
                "TailwindCSS",
                "AdobeXD",
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            },
        },
        {
            obj_name: 'my-todo',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbb',
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Nuxt.js",
                "TailwindCSS",
                "AdobeXD",
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }
        },
        {
            obj_name: 'es6-porting-code',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbc', 
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Nuxt.js",
                "TailwindCSS",
                "AdobeXD",
            ], 
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }          
        },
        {
            obj_name: 'open-jajax',            
            id: '260d1271-f1f2-4bc9-a5eb-05a89c8cccbd',
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Nuxt.js",
                "TailwindCSS",
                "AdobeXD",
            ],
            projectImage: {
                id: uuidv4(),
                title: "Uber Project Management UI",
                img: require('static/img/projects/difalco-website-list.png'),
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            }
        }
    ]

})

export const getters = {
    getProjectById: (state) => (id) => {
        return state.my_projects.find((project) => project.id == id)
    }
}

export const mutations = {}