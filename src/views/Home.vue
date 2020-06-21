<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="(x, n) in giveItems" :key="n" cols="12" sm="4">
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{x.Title}}</v-list-item-title>
              <v-list-item-subtitle>{{x.seller}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          

<div v-if="x.image == null">
<v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>
</div>
<div v-else>
<v-img :src="x.image.replace('src/assets/uploads/', '@')" height="194"></v-img>
<v-img src="@/assets/uploads/81825596_797836490641894_6789005266634407936_n.jpg"></v-img>
</div>
          

          <v-card-text>{{x.description}}</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="goProduct">Read</v-btn>
            <v-btn text color="deep-purple accent-4">Add cart</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  data: () => ({
  }),
  components: {},
  methods: {
    ...mapActions(["getItems"]),
    goProduct() {
      this.$router.push({ path: "/product" });
    }
  },
  created() {
    this.getItems();
  },
  computed: {
    ...mapGetters(["giveItems"])
  }
};
</script>
