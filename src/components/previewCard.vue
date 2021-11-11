<template lang="">
  <v-card elevation="5">
    <v-card-title>{{ inmobiliaria.nombre }}</v-card-title>

    <v-card-text
      ><v-container
        ><v-row justify="center"
          ><v-col cols="7">
            <chart :data="chartData" :labels="estados" /></v-col></v-row
      ></v-container>
    </v-card-text>
    <v-card-actions right>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/inmobiliaria/1')">
        Detalles
      </v-btn></v-card-actions
    >
  </v-card>
</template>
<script>
  import chart from "./chart";

  export default {
    components: {
      chart,
    },

    computed: {
      chartData() {
        let dataArray = [];
        this.estados.forEach((estado) => {
          let count = 0;
          this.inmobiliaria.procesos.forEach((proceso) => {
            if (proceso.estado === estado) {
              count += 1;
            }
          });
          dataArray.push(count);
        });
        return dataArray;
      },
    },

    data() {
      return {
        estados: ["abierto", "pendiente", "cerrado"],
      };
    },
    props: {
      inmobiliaria: Object,
    },
  };
</script>
<style lang=""></style>
