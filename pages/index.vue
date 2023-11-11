<!-- Please remove this file from your project -->
<template>
  <div class="container mx-auto">
    <h1>Hello!</h1>
  </div>
</template>

<script>

import mainComponent from '~/components/main.vue'

export default {
  name: 'Index',
  components: {    
    mainComponent
  },
  computed: {
    
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.detectViewport)  
  },
  created() {
    window.addEventListener('resize', this.detectViewport)
  },
  mounted: function() {
    console.log('index: mounted')
    console.log(process.env.DB_HOST) // 'localhost' 
    this.detectViewport()
  }
}
</script>
