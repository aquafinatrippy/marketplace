<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-row align="start" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title dark>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    name="login"
                    prepend-icon="mdi-account-edit"
                    type="text"
                    v-model="username"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-account-key"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" @click="goRegister">Register</v-btn>
                <v-btn color="primary" @click="log">Login</v-btn>
              </v-card-actions>
              <div v-if="error">
                {{ error }}
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    data: () => ({
      username: "",
      password: "",
      error: "",
    }),
    props: {
      source: String,
    },
    methods: {
      ...mapActions(["login"]),
      goRegister() {
        this.$router.push({ name: "Register" });
      },
      async log() {
        try {
          let logDet = {
            username: this.username,
            password: this.password,
          };
          await this.login(logDet);
        } catch (error) {
          this.error = error;
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  main {
    margin-top: 0 !important;
  }
  .primary {
    opacity: 0.7;
  }
</style>
