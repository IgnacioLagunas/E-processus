<template lang="">
  <v-container>
    <div class="text-h3 my-10">{{ inmobiliaria.nombre }}</div>
    <v-expansion-panels>
      <v-expansion-panel
        v-for="(proyecto, i) in inmobiliaria.proyectos"
        :key="i"
      >
        <v-expansion-panel-header>
          {{ proyecto.nombre }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <dataTable
            class="mb-6"
            :headers="headers"
            :procesos="proyecto.procesos"
          />
        </v-expansion-panel-content>
      </v-expansion-panel> </v-expansion-panels
  ></v-container>
</template>
<script>
  import dataTable from "@/components/dataTable";
  export default {
    components: {
      dataTable,
    },

    data() {
      return {
        headers: [
          {
            text: "Cliente",
            align: "start",
            sortable: false,
            value: "cliente",
          },
          { text: "Unidad", value: "unidad" },
          { text: "Sector", value: "sector" },
          { text: "F. Inspeccion", value: "fechaIngreso" },
          { text: "Estado", value: "estado" },
        ],

        inmobiliaria: {
          nombre: "Inmobiliaria Example",
          proyectos: [
            {
              nombre: "Edifcio AWA",
              procesos: [
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "102",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "cerrado",
                  fechaIngreso: "12/10/21",
                  unidad: "105",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "pendiente",
                  fechaIngreso: "12/10/21",
                  unidad: "404",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "pendiente",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Daniel Navarrete",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Daniel Navarrete",
                },
              ],
            },
            {
              nombre: "Edifcio Santa Julia",
              procesos: [
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "102",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "cerrado",
                  fechaIngreso: "12/10/21",
                  unidad: "105",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "pendiente",
                  fechaIngreso: "12/10/21",
                  unidad: "404",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "pendiente",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Juan Alberto",
                },
                {
                  proyecto: "Edificio AWA",
                  estado: "abierto",
                  fechaIngreso: "12/10/21",
                  unidad: "1202",
                  cliente: "Juan Alberto",
                },
              ],
            },
          ],
        },
      };
    },
  };
</script>
<style lang=""></style>
