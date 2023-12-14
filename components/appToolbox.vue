<template>
  <div class="container mx-auto mt-20"> <!-- Utilizzo delle classi container e mx-auto -->
    <div class="text-center"> <!-- Centrare il titolo -->
      <p class="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">Skills</p>
    </div>
    <div class="flex justify-center"> <!-- Centrare la griglia -->
      <ul class="grid grid-cols-5 gap-30 sm:gap-8 pt-8"> <!-- Utilizzo delle classi grid e gap-4 (puoi personalizzare il valore gap) -->
        <i
          v-for="iconName in iconsSkills"
          :key="iconName"
          :class="getIconClass(iconName)"
        >
        </i>
      </ul>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data: () => {
    return {
      // @todo
    }
  },
  computed: {
    ...mapState(['iconsSkills']),
  },
  methods: {
    getIconClass(iconName) {
      console.log(iconName)
      //const iconInfo = this.iconsSkills[iconName]
      return `devicon-${iconName} text-indigo-500 hover:text-gray-400 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500 custom-icon`
    },
  },
}
</script>

<style scoped>
.custom-icon {
  font-size: 36px;
}
</style>
