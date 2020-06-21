<template>
  <v-app-bar
    absolute
    color="#fcb69f"
    dark
    shrink-on-scroll
    src="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to bottom, rgba(0, 210, 255, 0.5), rgb(58, 123, 213, 0.5)"></v-img>
    </template>
      <v-toolbar-title link v-if="isLoggedIn">
        <v-btn color="primary" @click="goSell">
          <v-icon>mdi-account-cash</v-icon>Sell item
        </v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon @click="goHome">
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-menu offset-y v-if="isLoggedIn">
        <template v-slot:activator="{ on }">
          <v-btn dark v-on="on" icon>
            <v-icon>mdi-cart</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="goHome">
            <v-list-item-title>
              69
              <v-icon>mdi-currency-eur</v-icon>Item name
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="goPayment">
            <v-list-item-title>
              <v-btn>Checkout</v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      

      <v-btn icon @click="goProfile" v-if="isLoggedIn">
        <v-icon>mdi-account-cog</v-icon>
      </v-btn>
      <div class="my-2" v-else>
        <v-btn text small @click="loginscreen">Login</v-btn>
      </div>

      <v-btn icon @click="loggingout" v-if="isLoggedIn">
        <v-icon>mdi-power-settings</v-icon>
      </v-btn>
      <div class="my-2" v-else>
        <v-btn text small @click="goRegister">Register</v-btn>
      </div>
  </v-app-bar>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      bottomNav: 0
    };
  },
  components: {},
  methods: {
    ...mapActions(["loggingout"]),
    loginscreen() {
      this.$router.push({ path: "/login" });
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
    goProfile() {
      this.$router.push({ path: "/profile" });
    },
    goPayment() {
      this.$router.push({ name: "Payment" });
    },
    goSell() {
      this.$router.push({ name: "Sell" });
    },
    goRegister() {
        this.$router.push({ name: "Register" });
      }
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>

