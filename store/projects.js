
import Vue from 'vue'

export const state = () => ({
    my_projects: [
        {
            title: "Immobiliare di Falco",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
            category: "Real Estate App",
            img: require('static/img/projects/difalco-website.png'),
            url: 'https://www.difalcoimmobiliare.it'
        },
        {
            title: "CP Immobiliare di Falco",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
            category: "CMS Agenzia Immobilare",
            img: require('static/img/projects/difalco-auth.png'),
            url: 'https://www.difalcoimmobiliare.it/admin'
        },
        {
            title: "Shopping Play",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
            category: "Web App",
            img: require('static/img/projects/shop-home.png'),
            url: 'https://shoppingplay.netlify.app/'
        },
        {
            title: "Nodejs PWA Notification System",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",            
            category: "Backend/Nodejs",
            img: require('static/img/projects/domini-home.png'),
            url: 'https://www.dominiacency.com'
        },
        {
            title: "Gestionale Supremacy",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
            category: "Mobile Application",
            img: require('static/img/projects/suprem-dashb.png'),
            url: 'https://www.dominiacency.com'
        },
        {
            title: "My Todo",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",      
            category: "Web Application",
            img: require('static/img/projects/todo1.png'),
            url: 'https://todolist-96d98d.netlify.app/app'
        },
        {
            title: "ES6 Javascript Porting",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
            category: "Web Application",
            img: require('static/img/projects/todo1.png'),
            url: 'https://www.difalcoimmobiliare.it'
        },
        {
            title: "Open jAjax Demo",
            id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
            category: "Web Application",
            img: require('static/img/projects/todo1.png'),
            url: 'https://www.difalcoimmobiliare.it',
        }        
        
    ]
})

export const getters = {
    getProjectById: (state) => (id) => {
        return state.projects.find((project) => project.id == id)
    }
}

export const mutations = {}