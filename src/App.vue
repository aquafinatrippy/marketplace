<template>
  <v-app>
    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
main {
  margin-top: 20vh;
}
.theme--light.v-application {
  background: linear-gradient(to right, #d9d9d9, #ffffff) !important;
}
</style>
