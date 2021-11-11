<template>
  <v-container>
    <div class="text-h3 mt-10">E-Processus</div>
    <v-row class="mt-12">
      <v-col
        cols="3"
        align-self="center"
        v-for="inmobiliaria in inmobiliarias"
        :key="inmobiliaria"
        ><previewCard :inmobiliaria="inmobiliaria"
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
    data() {
      return {
        inmobiliarias: [
          {
            nombre: "Inmobiliaria PIPO",
            procesos: [
              {
                proyecto: "Edificio AWA",
                estado: "abierto",
                fechaIngreso: "12/10/21",
                dpto: "102",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "cerrado",
                fechaIngreso: "12/10/21",
                dpto: "105",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "pendiente",
                fechaIngreso: "12/10/21",
                dpto: "404",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "pendiente",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "abierto",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "abierto",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "abierto",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
            ],
          },
          {
            nombre: "Inmobiliaria Santa Juali",
            procesos: [
              {
                proyecto: "Edificio AWA",
                estado: "abierto",
                fechaIngreso: "12/10/21",
                dpto: "102",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "cerrado",
                fechaIngreso: "12/10/21",
                dpto: "105",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "pendiente",
                fechaIngreso: "12/10/21",
                dpto: "404",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "pendiente",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "pendiente",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "cerrado",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
              {
                proyecto: "Edificio AWA",
                estado: "cerrado",
                fechaIngreso: "12/10/21",
                dpto: "1202",
                cliente: "Daniel Navarrete",
              },
            ],
          },
        ],
      };
    },
  };
</script>
