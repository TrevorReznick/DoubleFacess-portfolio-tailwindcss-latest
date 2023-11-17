<template>
<div class="container mx-auto">
    <!-- Check if there are projects and then load -->
    <div v-if="project"></div>
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
        url(obj) {
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

