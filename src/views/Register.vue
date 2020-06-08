<template>
  <v-container>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Enter information
        <small>Username and password needed</small>
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-card class="mb-12" height="200px">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="username" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

                     <v-text-field
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Normal with hint text"
            hint="At least 8 characters"
            counter
            @click:append="show1 = !show1"
          ></v-text-field>
            <v-checkbox v-model="checkbox" label="Data right?"></v-checkbox>
          </v-form>
        </v-card>
        <div v-if="checkbox == false"><v-btn color="primary" disabled @click="e6 = 2">Continue</v-btn></div>
        <div v-else><v-btn color="primary" @click="e6 = 2">Continue</v-btn></div>
        
        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">Tems and conditions</v-stepper-step>

      <v-stepper-content step="2">
        <v-card class="mb-12" height="200px">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, iste! Commodi doloribus ut saepe rerum aut magni doloremque suscipit eius? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aliquid, ea a deserunt sit sed ipsa eligendi reprehenderit possimus mollitia veritatis rerum earum nihil nisi minus quas porro consectetur qui repellat sint similique perferendis commodi iste. Temporibus distinctio totam quisquam.</p>
        </v-card>
        <v-checkbox v-model="checkbox2" label="Agree?"></v-checkbox>
        <v-card-text color="danger">Error text</v-card-text>
        <div v-if="checkbox2 == false"><v-btn color="primary" disabled @click="e6 = 3">Continue</v-btn></div>
        <div v-else><v-btn color="primary" @click="e6 = 3; registerUser()">Continue</v-btn></div>
        <div></div>
        
        
        <v-btn text>Cancel</v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">Start using</v-stepper-step>

      <v-stepper-content step="3">
        <v-btn color="primary" @click="e6 = 4">Login</v-btn>
      </v-stepper-content>
    </v-stepper>
  </v-container>
</template>


<script>
import {mapActions} from 'vuex'
export default {
  data: () => ({
    e6: 1,
    valid: true,
    username: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    password: '',
    checkbox2: false,
    show1: false,
    rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
  }),

  methods: {
    ...mapActions(['register']),
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    async registerUser(){
      let data = {
        username: this.username,
        password: this.password
      }
      await this.register(data);
    }
  }
};
</script>