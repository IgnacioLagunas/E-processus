<template>
  <v-container fluid class="login_container">
    <v-row justify="center" align="center">
      <v-col cols="3" align="center">
        <h1 class="text-h3">E-Processus</h1>
        <userForm class="mt-2" @submit="loginUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import userForm from "../components/userForm";

export default {
  name: "Home",

  components: {
    userForm,
  },
  methods: {
    loginUser(userCredentials) {
      console.log(userCredentials);

      this.$store.dispatch("system/loginUser", userCredentials);
    },
  },
};
</script>
<style lang="scss">
.login_container {
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
