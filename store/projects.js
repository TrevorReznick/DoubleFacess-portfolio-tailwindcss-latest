
import Vue from 'vue'

export const state = () => ({
    my_projects: [
        {
               
        }
    ]
})

export const getters = {
    getProjectById: (state) => (id) => {
        return state.projects.find((project) => project.id == id)
    }
}

export const mutations = {}