<template>
  <p>hello!</p>
</template>

<style lang='scss' scoped></style>

<script>
import { mapState } from 'vuex'
import {mapGetters} from 'vuex'
import feather from 'feather-icons'

export default {
  data: () => {
    return {
      selectedProject: '',
      searchProject: '',
    };
  },
  computed: {
    /*
    ...mapState({
      projectsGridSettings
    }),
    */
    ...mapGetters({
      _getter: '_getter'      
    }),
    filteredProjects() {
      if (this.selectedProject) {
        return this.filterProjectsByCategory();
      } else if (this.searchProject) {
        return this.filterProjectsBySearch();
      }
      return this.projects;
    },
    projectsSettings() {
      return this._getter('projectsGridSettings')
    }
    /*projectsHeader: () {
      reu
    }
    */
  },
  methods: {
    filterProjectsByCategory() {
      return this.projects.filter((item) => {
        let category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(this.selectedProject);
      });
    },
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, 'i');
      return this.projects.filter((el) => el.title.match(project));
    },
  },
  mounted() {
    feather.replace();
  },
};
</script>
