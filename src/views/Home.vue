<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="3" align-self="center" v-for="n in 5" :key="n"
        ><previewCard
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
  import previewCard from "@/components/previewCard";
  export default {
    name: "Home",

    components: {
      previewCard,
    },
  };
</script>
