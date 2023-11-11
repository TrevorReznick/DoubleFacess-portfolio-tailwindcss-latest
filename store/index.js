import Vue from "vue"
import { v4 as uuidv4 } from "uuid";


export const state = () => ({
    isMobile: false,
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
})

export const getters = {
    _getter: state => items => state[items]
}

export const mutations = {
    commitAppState(state, { key, value }) {
        state[key] = value
    }
}