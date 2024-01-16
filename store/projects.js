
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
            },
            objectives: 
                "Piattaforma online che facilita la ricerca e l'accesso a una vasta selezione " +
                "di annunci immobiliari nell'area di Agrigento, offrendo agli utenti strumenti e risorse " +
                "utili per supportare le decisioni legate all'acquisto o all'affitto di una proprietà.",
            details: 
                "Il sito web Immobiliare di Falco è una piattaforma digitale che consente all'agenzia di " + 
                "gestire il proprio database di immobili e interagire in modo efficiente con i propri clienti. " + 
                "Sviluppato con JavaScript, Php, NuxtCodeigniter, Auth0 e database MySql" + 
                "\nQuando un utente accede al nostro sito web, ha la possibilità di cercare immobili in vendita o in affitto " + 
                "utilizzando una vasta gamma di filtri e opzioni di ricerca. Grazie alla nostra efficiente piattaforma, " + 
                "i risultati vengono restituiti in modo tempestivo, offrendo una selezione di immobili corrispondenti ai criteri desiderati. " +
                "Tutti i dati relativi agli immobili sono memorizzati nel nostro affidabile database MySQL, che contiene informazioni " + 
                "dettagliate sulle caratteristiche, i prezzi, le ubicazioni e i contatti."

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
                img: require('static/img/projects/difalco-cp-list.png')
                //img: require('static/img/projects/difalco-website-energy.png'),
                //img: require('static/img/projects/difalco-website-hero.png')
            },
            objectives: 
                "Consente all'agenzia Immobiliare di Falco di mantenere aggiornato il proprio database immobiliare, " + 
                "monitorare le prestazioni, analizzare i dati e pianificare le strategie di ottimizzazione più efficaci " + 
                "per il sito web.",
            details: 
                "Il Pannello di Controllo di Immobiliare di Falco è il CMS dell'agenzia immobiliar, offrendo un sistema " + 
                "centralizzato e controllato per gestire tutte le attività e i dati del sito web. Attraverso la sua intuitiva " + 
                "interfaccia utente, l'agenzia può svolgere una serie di operazioni essenziali, tra cui:" +
                "\n• Aggiungere nuovi immobili al database con procedure guidate e veloci. È possibile specificare dettagli cruciali " + 
                "come l'ubicazione, le caratteristiche, il prezzo, le immagini e una descrizione completa." + 
                "\n• Effettuare modifiche o aggiornamenti ai dettagli di qualsiasi immobile esistente in modo semplice e rapido. " + 
                "È possibile modificare il prezzo, le caratteristiche, le descrizioni, le immagini, gli indirizzi e altre " + 
                "informazioni in qualsiasi momento." + 
                "\n• Eseguire operazioni di massa su gruppi di immobili, come l'aggiornamento simultaneo dello stato degli immobili, " + 
                "per un efficiente aggiornamento dei dati." + 
                "\n• Utilizzare potenti filtri, opzioni di ordinamento e strumenti di ricerca per individuare rapidamente qualsiasi " +
                "immobile all'interno del database." + 
                "\n• Gestire le autorizzazioni degli utenti per limitare l'accesso a specifiche aree del Pannello di Controllo.",
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
                //img: require('static/img/projects/shop-list-2.png'),
                img: require('static/img/projects/shop-list-3.png')
            },
            objectives: 
                "Realizzare un applicazione shopping cart completa utilizzando il sistema di memorizzazione locale di indexedDb",
            details: 
                "Vue è il framework javascript famoso per la sua facilità di apprendimento, reattività e supporto all'integrazione " + 
                "di Vuex per la gestione dello stato degli articoli. Vue, Vuex e IndexedDB consentono una gestione reattiva, " + 
                "centralizzata ed efficiente dei dati degli articoli per l'intera applicazione. Lo stato degli articoli è memorizzato in Vuex, " + 
                "mentre i dati permanenti sono archiviati in IndexedDB. Le modifiche a Vuex vengono propagate ad IndexedDB e viceversa, " + 
                "garantendo coerenza." + 
                "\n• Il framework Css qui utilizzato è Vuetify, libreria di componenti UI per Vue.js, un framework JavaScript per la creazione di " + 
                "interfacce utente offre un set completo di componenti predefiniti e temi stilizzati, consentendo agli sviluppatori di creare rapidamente " + 
                "interfacce utente moderne e reattive",
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
                //img: require('static/img/projects/domini-notif.png'),
                img: require('static/img/projects/domini-login.png')
            },
            objectives: 
                "Il progetto proposto consiste nello sviluppo di un backend basato su Node.js per gestire il sistema di notifiche push " + 
                "per Progressive Web App (PWA), email e notifiche da un'applicazione, utilizzando il paradigma di programmazione orientata " + 
                "agli oggetti (OOP).",
            details: 
                "Caratteristiche principali del progetto: " + 
                "\n• Node.js Backend: Utilizzeremo Node.js, un runtime JavaScript lato server, per creare il backend. Node.js offre un'architettura " +
                "event-driven e asincrona, che è ideale per le applicazioni che richiedono un alto numero di connessioni simultanee come le notifiche push. " + 
                "\n• Gestione delle Notifiche PWA: Implementeremo il supporto per le notifiche push PWA, consentendo agli utenti di ricevere notifiche direttamente " + 
                "sulle loro app web progressive. Utilizzeremo i servizi di notifica push forniti dai browser come Firebase Cloud Messaging (FCM) " + 
                "per inviare le notifiche. " + 
                "\n• Invio di Email: Integreremo un servizio di invio email Nodemailer per consentire l'invio di notifiche tramite email. Sarà possibile personalizzare " + 
                "il contenuto delle email e includere collegamenti o informazioni pertinenti. Notifiche dall'Applicazione: " + 
                "\n• Creeremo un'API per consentire all'applicazione di inviare notifiche al backend. Questo consentirà " + 
                "all'applicazione di inviare notifiche personalizzate ai suoi utenti tramite il backend, utilizzando diversi " +
                "canali come le notifiche push e le email. Gestione dell'autenticazione e dell'autorizzazione: Implementeremo un sistema di autenticazione e autorizzazione per garantire che solo gli utenti autorizzati possano inviare notifiche. Potrebbe includere l'uso di token JWT (JSON Web Token) per l'autenticazione e l'autorizzazione basata sui ruoli per controllare l'accesso alle funzionalità di invio delle notifiche."
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
            objectives: 
                "",
            details: 
                "",
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
            },
            objectives: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam.",
            details: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam."
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
            },
            objectives: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam.",
            details: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam."
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
            },
            objectives: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam.",
            details: 
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, " + 
                "mollitia molestias incidunt quas ipsa accusamus veniam."
        }
    ]

})

export const getters = {
    getProjectById: (state) => (id) => {
        return state.my_projects.find((project) => project.id == id)
    }
}

export const mutations = {}