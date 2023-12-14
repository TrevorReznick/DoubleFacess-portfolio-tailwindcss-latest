<template>
<div class="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
    <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
        <p class="font-general-semibold text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">Toolbox</p>
        <ul class="flex gap-4 sm:gap-8">
            <i class="devicon-html5-plain text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"></i>
            <i class="devicon-html5-plain text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"></i>
            <i class="devicon-html5-plain text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"></i>
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
        // La logica rimane la stessa come nel precedente esempio
        const iconInfo = this.iconsSkills[iconName]
        if (iconInfo) {
            return `devicon-${iconName} text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500`
        }
    }
  }
}
</script>

<style scoped>
.custom-icon {
  font-size: 28px;
}
</style>
