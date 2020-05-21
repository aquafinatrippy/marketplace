<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Enter information
      <small>Username and password needed</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-card class="mb-12" height="200px">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          <v-text-field v-model="password" label="Password" required></v-text-field>
        </v-form>
      </v-card>
      <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">Tems and conditions</v-stepper-step>

    <v-stepper-content step="2">
      <v-card class="mb-12" height="200px">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, iste! Commodi doloribus ut saepe rerum aut magni doloremque suscipit eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aliquid, ea a deserunt sit sed ipsa eligendi reprehenderit possimus mollitia veritatis rerum earum nihil nisi minus quas porro consectetur qui repellat sint similique perferendis commodi iste. Temporibus distinctio totam quisquam.</p>
      </v-card>
      <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Start using</v-stepper-step>

    <v-stepper-content step="3">
      <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
      <v-btn text>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>


<script>
export default {
  data: () => ({
    e6: 1,
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>