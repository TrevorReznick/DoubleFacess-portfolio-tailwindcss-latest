<template>
<div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project">
        <!-- Project heading and meta info -->
      <div>        
        <a 
          :href="externalLink(project)"
          target="_blank"
          class="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          IS My Title
        </a>
        <div class="flex">
          <div class="flex items-center mr-10 pt-3">
            <i
              data-feather="clock"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              >Nov 04, 22</span
            >
          </div>
          <div class="flex items-center pt-3">
            <i
              data-feather="tag"
              class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
            ></i>
            <span
              class="font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"
              > Frontend / Bootstrap / Nuxt / Api / Auth0 / Codeigniter</span
            >
          </div>
        </div>
      </div>
    </div>
    <div v-else class="font-general-medium container mx-auto text-center">
      <h1>No projects yet</h1>
    </div>
  </div>
</template>

<script>

import feather from "feather-icons"
import relatedProjects from "../../components/projectsRelatedProjects.vue"

export default {
    components: { 
        relatedProjects 
    },
    data: () => {
        return {
        // @todo
        }
    },
    computed: {
        project() {
            return this.$store.getters['projects/getProjectById'](this.$route.params.id)
        },
        _url(obj) {
            return this.externalLink(obj)
        }
    },
    mounted() {
        feather.replace()
        this.externalLink(this.project)
    },
    updated() {
        feather.replace()
    },    
    methods: {
        externalLink(obj) {
            return obj.url
        }
    }
}

</script>

