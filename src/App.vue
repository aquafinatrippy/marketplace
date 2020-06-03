<template>
  <v-app>
    <div v-if="user">
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
  import { mapState } from "vuex";

  export default {
    name: "App",

    components: {
      Navbar,
      Footer,
    },
    computed: {
      ...mapState["user"],
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
</style>
