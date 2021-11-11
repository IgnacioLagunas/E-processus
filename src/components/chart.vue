<script>
  import { Pie } from "vue-chartjs";
  export default {
    extends: Pie,
    data() {
      return {
        colors: ["#4BC0C0", "#FFD778", "#FF6384"],
      };
    },
    props: {
      data: Array,
      labels: Array,
    },
    mounted() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "prueba",
              data: this.data,
              backgroundColor: this.colors,
            },
          ],
        },
        {
          responsive: true,
          legend: { display: false },
        }
      );
    },
  };
</script>
<style lang=""></style>
