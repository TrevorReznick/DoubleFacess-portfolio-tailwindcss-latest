<script>
import feather from "feather-icons";

export default {
  scrollToTop: true,
  data: () => {
    return {
      contacts: [
        {
          id: 1,
          name: "Agrigento, Italia",
          icon: "map-pin",
        },
        {
          id: 2,
          name: "enzonav@yahoo.it",
          icon: "mail",
        },
        {
          id: 3,
          name: "+39 3286485776",
          icon: "phone",
        },
      ],
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
};
</script>

<template>
  <div
    class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    "
  >
    <!-- Contact form -->
    <appContactForm />

    <!-- Contact details -->
    <appContactDetails :contacts="contacts" />
  </div>
</template>
