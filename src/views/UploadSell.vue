<template>
  <v-container>
    <v-text-field required label="Item name"></v-text-field>
    <v-textarea name="input-7-1" label="Item description" hint="Item description"></v-textarea>
    <v-file-input label="File input" filled prepend-icon="mdi-camera"></v-file-input>
    <div class="my-2">
      <v-btn x-large color="primary" dark>Add to sale</v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "",
    desc: ""
  })
};
</script>

<style lang="sass" scoped>
.my-2
    text-align: center
</style>