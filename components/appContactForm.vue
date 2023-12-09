<template>
  <!-- Contact form -->
  <div class="w-full md:w-1/2">
    <div class="leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left">
      <p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
        Contact Form
      </p>
      <form
        @submit.prevent="sendMailForm"
        class="font-general-regular space-y-7"
      >
        <div class="">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="name"
            >Full Name</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="name"
            name="name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            v-model="msg.name"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="email"
            >Email</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="email"
            name="email"
            type="text"
            required=""
            placeholder="Your Email"
            aria-label="Email"
            v-model="msg.email"
          />
        </div>
        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="subject"
            >Subject</label
          >
          <input
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="subject"
            name="subject"
            type="text"
            required=""
            placeholder="Subject"
            aria-label="Subject"
            v-model="msg.subject"
          />
        </div>

        <div class="mt-6">
          <label
            class="block text-lg text-primary-dark dark:text-primary-light mb-2"
            for="message"
            >Message</label
          >
          <textarea
            class="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="message"
            name="message"
            cols="14"
            rows="6"
            aria-label="Message"
            v-model="msg.text"
          ></textarea>
        </div>

        <div class="mt-6">
          <Button
            title="Send Message"
            class="px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500"
            type="submit"
            aria-label="Send Message"
            @click="sendMailForm"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Button from './button.vue'

const url = 'https://node-express-typescript.fly.dev/api'
//const url = 'http://localhost:8080/api'

const options = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  },
}


export default {
  components: { Button },
  data: () => {
    return {
      msg: {
        name: '',
        email: '',
        subject: '',
        text: '',
      },
    }
  },
  methods: {
    sendMailForm: async function () {
      console.log('sending data')
      await axios
        .post(url + '/send-email', this.msg, options)
        .then((response) => {
          let message = response.data.message
          console.log(response.data)
          if (message === 'success') {
            console.log('client successfully sent email')
          }
        })
        .catch((errors) => {
          console.log('there is an error!')
          console.log(errors)
        })
      /*
      try {
        const response = await this.$axios.get(API_URL + '/test-email', { 
          //message: this.message
        })
        console.log(response.data)
      } catch (e) {
        console.error('Errore durante l\'invio dei dati:', e)
      } 
      alert('sent!')  
      */
    },
    TestMailForm: async function () {
      const headers = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
      }
      console.log('sending data')
      await axios
        .get(url + '/test-mail')
        .then((response) => {
          let message = response.data.message
          if (message === 'success') {
            console.log('client successfully sent email')
          }
        })
        .catch((errors) => {
          console.log('there is an error!')
          console.log(errors)
        })
    },
  },
};
</script>


<style lang="scss" scoped></style>
