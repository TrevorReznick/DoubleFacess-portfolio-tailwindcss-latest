<template>
<transition name="fade">
  <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
    <!-- Modal body background as backdrop -->
    <div v-show="modal" @click="showModal()" class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>
    <!-- Modal contents -->
    <main class="flex flex-col items-center justify-center h-full w-full">
      <transition name="fade-up-down">
        <div v-show="modal" class="modal-wrapper flex items-center z-30">
          <div class="modal bg-secondary-light dark:bg-primary-dark flex-row rounded-lg relative">
          <!--
          <div class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light  dark:border-ternary-dark">
              <h3 class="text-primary-dark dark:text-primary-light text-xl">{{ project[0].title }}</h3>
              <button
                class="px-4 text-primary-dark dark:text-primary-light"
                @click="showModal()"
              >
                <i data-feather="x" class="w-8 sm:w-12"></i>
              </button>
            </div>
            @@ to do @@
            <div class="modal-body p-5 w-full h-full"></div>
            <div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
              <Button
                title="Close"
                class="px-4 sm:px-6 py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                @click="showModal()"
                aria-label="Close Hire Me Modal"
              ></Button>
            </div>
          </div>
          -->
          <div class="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light  dark:border-ternary-dark">
            <h1 class="text-primary-dark dark:text-primary-light text-xl">{{ project[0].title }}</h1>
            <button
              class="px-4 text-primary-dark dark:text-primary-light"
              @click="showModal()"
            >
              <i data-feather="x" class="w-8 sm:w-12"></i>
            </button>
          </div>
          <div 
            class="bg-card text-card-foreground shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-sm mx-auto" 
            data-v0-t="card"
          >
            <!--
            <img 
              src="https://landingpage.fyi/topics/email-marketing-tools.svg" 
              alt="Product Image" 
              width="400" 
              height="400" 
              class="object-cover w-full rounded-lg" 
              style="aspect-ratio: 400 / 400; object-fit: cover;"
            >
            -->
            <img 
              :src="project_detail[0].projectImage.img"
              alt="Product Image" 
              width="400" 
              height="400" 
              class="object-cover w-full rounded-lg" 
              style="aspect-ratio: 400 / 400; object-fit: cover;"
            >
            <h2 class="text-primary-dark dark:text-primary-light text-xl pt-2">{{ project[0].category }}</h2>
            <p class="text-gray-500 dark:text-gray-400 mt-2">$99.99</p>
            <p class="text-gray-600 dark:text-gray-300 mt-2">
              This is a description of the product. It provides information about the product and its features.
            </p>
            <div class="flex justify-center space-x-4">
              <Button 
                title="Visita"
                class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg pl-1/4" 
                type="submit"
              />
              <NuxtLink :to="`/projects/${project[0].id}`">
                <Button 
                  title="Dettagli"
                  class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg" 
                  type="submit"
                />
              </NuxtLink>
            </div>
          </div>
          </div>
          <!--
          img: require("@/static/images/mobile-project-1.jpg"),
          <div class="flex items-center justify-center mb-8">
          <img :src="project.projectImages[0].img" class="rounded-xl shadow-lg" />
          </div>
          -->
        </div>
      </transition>
    </main>
  </div>
</transition>
</template>

<script>
import feather from "feather-icons";
import Button from "./button.vue";
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    };
  },
  props: {
    showModal: {
      type: Function,
      required: false
    },
    modal: {
      type: Boolean,
      required: false
    },    
    categories: {
      type: Array,
      required: false
    },
    project: {
      type: Array,
      required: true
    },
    project_detail: {
      type: Array,
      required: true
    }
  },
  computed: {
    _project() {
      return this.project[0]
    }
  },  
  mounted() {
    feather.replace();
  },
  methods: {
    
  },
}
</script>

<style>
.modal-body {
  max-height: 500px;
}
.bg-gray-800-opacity {
  background-color: #2d374850;
}
@media screen and (max-width: 768px) {
  .modal-body {
    max-height: 400px;
  }
}
.fade-up-down-enter-active {
  transition: all 0.3s ease;
}
.fade-up-down-leave-active {
  transition: all 0.3s ease;
}
.fade-up-down-enter {
  transform: translateY(10%);
  opacity: 0;
}
.fade-up-down-leave-to {
  transform: translateY(10%);
  opacity: 0;
}

.fade-enter-active {
  -webkit-transition: opacity 2s;
  transition: opacity 0.3s;
}
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
