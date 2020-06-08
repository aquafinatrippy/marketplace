<template>
  <v-app>
    <div v-if="isLoggedIn">
      <Navbar />
    </div>
    <div v-else></div>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import { mapGetters } from "vuex";

  export default {
    name: "App",

    components: {
      Navbar,
      Footer,
    },
    computed: {
      ...mapGetters(["isLoggedIn"]),
    },

    data: () => ({
      //
    }),
  };
</script>
<style lang="scss">
  main {
    margin-top: 20vh;
  }
  .theme--light.v-application{
    background: linear-gradient(to right, #d9d9d9, #ffffff) !important;
  }
</style>
