<template>
  <v-app>
    <Navbar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss" >
main {
  margin-top: 20vh;
}
</style>
