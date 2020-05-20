<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
    scroll-target="#scrolling-techniques-2"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
    </template>

    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goHome">
          <v-list-item-title>
            <v-icon>mdi-home-currency-usd</v-icon>HOME
          </v-list-item-title>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title>
            <v-icon>mdi-power-settings</v-icon>LOGOUT
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-toolbar-title>M4rk3dPl4c3</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="goHome">
          <v-list-item-title>
            69<v-icon>mdi-currency-eur</v-icon>Item name
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-btn icon @click="goProfile">
      <v-icon>mdi-account-cog</v-icon>
    </v-btn>

    <v-btn icon @click="logout">
      <v-icon>mdi-power-settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>


<script>
export default {
  data() {
    return {
      bottomNav: 0
    };
  },
  methods: {
    logout() {
      this.$router.push({ path: "/login" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    goProfile() {
      this.$router.push({ path: "/profile" });
    }
  }
};
</script>

