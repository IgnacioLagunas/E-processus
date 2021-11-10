<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: "App",
    // beforeMount() {
    //   this.$store.dispatch("system/initializeFirebase");
    // },

    data: () => ({
      //
    }),
  };
</script>
