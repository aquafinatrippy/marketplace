<template>
  <v-container>
    <v-text-field required label="Item name" v-model="name"></v-text-field>
    <v-text-field required label="Item name" v-model="price"></v-text-field>
    
    <v-textarea name="input-7-1" label="Item description" hint="Item description" v-model="desc"></v-textarea>
    <v-file-input label="File input" filled prepend-icon="mdi-camera"  v-model="file"></v-file-input>
    <div class="my-2">
      <v-btn x-large color="primary" dark @click="postItem">Add to sale</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "",
    desc: "",
    file: "",
    price: null
  }),
  methods: {
    async postItem(){
      try {
         const user = this.$store.state.user.username
      const d = {
        Title: this.name,
        seller: user,
        description: this.desc,
        price: this.price,
        image: this.file,
        
      }
      console.log(d)
      console.log(user)
      } catch (error) {
        console.log(error)
      }
     
    }
  }
};
</script>

<style lang="sass" scoped>
.my-2
    text-align: center
</style>