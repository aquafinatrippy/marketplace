<template>
  <v-app-bar
    :collapse="!collapseOnScroll"
    :collapse-on-scroll="collapseOnScroll"
    absolute
    color="deep-purple accent-4"
    dark
    scroll-target="#scrolling-techniques-6"
  >
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title link @click="goHome">Home</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title link @click="logout">Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <v-toolbar-title>MarketPlaxe</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-checkbox v-model="collapseOnScroll" color="white" hide-details></v-checkbox>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    collapseOnScroll: true
  }),
  methods: {
    logout() {
      this.$router.push({ path: "/login" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-list-item__title {
  cursor: pointer;
}
.v-list-item {
  &:hover {
    background-color: blue;
  }
}
</style>