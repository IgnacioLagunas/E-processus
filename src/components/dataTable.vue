<template lang="">
  <v-data-table
    hide-default-footer
    :headers="headers"
    :items="procesos"
    :items-per-page="-1"
    class="elevation-1"
  ><template v-slot:item.estado="{ item }">
      <v-container><v-row><v-chip
            :color="getColor(item.estado)"
            dark
          >
            {{ item.estado }}
          </v-chip></v-row>
          
      </v-container>
    </template></v-data-table>
</template>
<script>
  export default {
    props: {
      headers: Array,
      procesos: Array,
    },
    methods:{
        getColor(estado){
            let color = "";
            switch(estado){
                case "abierto": color = "#4BC0C0"; break;
                case "pendiente": color = "#FFD778";break;
                case "cerrado" : color = "#FF6384";break;
            } 
            return color;
        }
    },
    data() {
      return {
        
      };
    },
  };
</script>
<style lang=""></style>
