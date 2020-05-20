<template>
  <v-container>
      <div class="display-2 text-center">
          Profile name
      </div>
      <div class="headline text-center">
          Items for sale
      </div>
          <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card max-width="344" class="mx-auto">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">Item title</v-list-item-title>
              <v-list-item-subtitle>Seller:</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-img src="https://cdn.vuetifyjs.com/images/cards/mountain.jpg" height="194"></v-img>

          <v-card-text>Item description</v-card-text>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4">Read</v-btn>
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