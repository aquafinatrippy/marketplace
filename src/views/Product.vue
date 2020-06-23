<template>
  <v-container>
    <v-container>
      <v-row align="center">
        <v-item-group v-model="window" class="shrink mr-6" mandatory tag="v-flex">
          <v-item  v-slot:default="{ active }">
            <div>
              <v-btn :input-value="active" icon @click="backwards" >
                <v-icon>mdi-step-backward-2</v-icon>
              </v-btn>
            </div>
          </v-item>
        </v-item-group>

        <v-col>
          <v-window v-model="window" class="elevation-1" vertical>
            <v-window-item v-for="n in length" :key="n">
              <v-card flat>
                <v-card-text>
                  <v-row class="mb-4" align="center">
                    <v-avatar color="grey" class="mr-4"></v-avatar>
                    <strong class="title">{{productInfo[0].seller}}</strong>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>mdi-account</v-icon>
                    </v-btn>
                  </v-row>
                  <v-img
                    :src="getSrc(productInfo[0].image.slice(19, productInfo[0].image.length - 4))  "
                    height="400"
                    width="400"
                    contain
                  ></v-img>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
        <v-col>
          <h1>{{productInfo[0].Title}}</h1>
          <p>Product description</p>
          <h3>{{productInfo[0].price}}</h3>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>




<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    length: 1,
    window: 0,
    param: "",
    productInfo: []
  }),
  created() {
    this.productInfo = this.singleItemGet(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["singleItemGet"])
  },
  methods: {
    getSrc(name) {
      var images = require.context("../assets/uploads/", false, /\.jpg$/);
      return images("./" + name + ".jpg");
    },
    backwards(){
      this.$router.go(-1)
    }
  }
};
</script>