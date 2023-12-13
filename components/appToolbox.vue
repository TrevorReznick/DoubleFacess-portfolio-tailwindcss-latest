<template>
<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
  <div class="text-center mx-auto sm:mx-0 sm:self-center"> <!-- Aggiunta classe `mx-auto` e `sm:self-center` -->
    <p class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">toolbox</p>
    <i class="devicon-apple-original text-ternary-dark dark:text-ternary-light text-lg custom-icon"></i>
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
    ...mapState(['aboutMe']),
  },
}
</script>

<style scoped>
.custom-icon {
  font-size: 26px;
}
</style>
