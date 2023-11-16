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
//import ProjectRelatedProjects from "../../components/projects/ProjectRelatedProjects.vue"

export default {
  scrollToTop: true,
  components: { ProjectRelatedProjects },
  data: () => {
    return {
      // @todo
    }
  }
}

</script>

