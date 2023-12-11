<template>
  <transition name="fade">
    <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
      <!-- Modal body background as backdrop -->
      <div
        v-show="modal"
        @click="showModal()"
        class="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"
      ></div>
      <!-- Modal contents -->
      <main class="flex flex-col items-center justify-center h-full w-full">
        <transition name="fade-up-down">
          <div v-show="modal" class="modal-wrapper flex items-center z-30">
            <div
              class="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative"
            >
              <div
                class="modal-header flex justify-between gap-10 p-5 pt-1 border-b border-ternary-light dark:border-ternary-dark pt-4"
              >
                <div class="text-center px-0 py-0">
                  <p
                    class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"
                  >
                    {{ project[0].title }}
                  </p>
                </div>
                <button
                  class="px-4 text-primary-dark dark:text-primary-light"
                  @click="showModal()"
                >
                  <i data-feather="x" class="w-8 sm:w-12"></i>
                </button>
              </div>
              <div class="modal-body w-full h-full overflow-y-auto bg-card text-card-foreground shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-sm mx-auto">
                <!--
                <div 
                  class="bg-card text-card-foreground shadow-sm border border-gray-200 dark:border-gray-800 rounded-lg p-4 max-w-sm mx-auto" 
                  data-v0-t="card"
                >
                -->
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
                    width="420" 
                    height="420" 
                    class="object-cover w-full rounded-lg" 
                    style="aspect-ratio: 400 / 400; object-fit: cover;"
                  >
                  <h2 class="text-primary-dark dark:text-primary-light text-xl pt-2">{{ project[0].category }}</h2>
                  <p class="text-gray-500 dark:text-gray-400 mt-2">$99.99</p>
                  <p class="text-gray-600 dark:text-gray-300 mt-2">{{project_detail[0].objectives}}</p> 
                <!--
                </div>
                -->
              </div>
              <div
                class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right flex justify-center space-x-4"
              >
                <NuxtLink :to="`/projects/${project[0].id}`">
                  <Button
                    title="Dettagli"
                    class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                    type="submit"
                    aria-label="Details Button"
                  />
                </NuxtLink>
                <Button
                  title="Vai al sito"
                  class="px-4 sm:px-6 py-2 sm:py-2.5 text-white bg-indigo-500 hover:bg-indigo-600 rounded-md focus:ring-1 focus:ring-indigo-900 duration-500"
                  type="submit"
                  aria-label="Go To Page Button"
                />
              </div>              
            </div>
          </div>
        </transition>
      </main>
    </div>
  </transition>
</template>

<script>
import feather from 'feather-icons'
import Button from './button.vue'
export default {
  components: { Button },
  data: () => {
    return {
      // @todo
    }
  },
  props: {
    showModal: {
      type: Function,
      required: false,
    },
    modal: {
      type: Boolean,
      required: false,
    },
    categories: {
      type: Array,
      required: false,
    },
    project: {
      type: Array,
      required: true,
    },
    project_detail: {
      type: Array,
      required: true,
    },
  },
  computed: {
    _project() {
      return this.project[0]
    },
  },
  mounted() {
    feather.replace()
  },
  methods: {},
}
</script>

<style>

.modal-body {
  max-height: 500px;
  min-width: 450px;
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
