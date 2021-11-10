<template lang="">
  <div>
    <v-row>
      <v-col>
        <v-form @submit.prevent="submitForm" ref="form" class="mt-5" outlined>
          <v-text-field
            solo
            name="email"
            placeholder="E-mail"
            type="email"
            v-model="email"
            :rules="[(v) => !!v || 'Este campo es obligatorio']"
          ></v-text-field>
          <v-text-field
            solo
            class="mt-2"
            name="password"
            placeholder="Password"
            type="password"
            :counter="20"
            v-model="password"
            :rules="[(v) => !!v || 'Este campo es obligatorio']"
          ></v-text-field>
          <v-row justify="center" class="mt-2">
            <v-btn class="text-center mt-2" dark type="submit">
              {{ registro ? "Registrarme" : "Iniciar Sesión" }}
            </v-btn>
          </v-row>
          <v-row justify="center" class="mt-8">
            <div class="text-subtitle-1 grey--text" v-if="!registro">
              Si no tienes una cuenta puedes registrarte
              <span
                style="cursor: pointer"
                class="blue--text subtitle"
                @click="$router.push('/sign-in')"
                >aquí</span
              >
            </div>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },
  props: {
    registro: Boolean,
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.$emit("submit", { email: this.email, password: this.password });
      }
    },
  },
};
</script>
<style lang=""></style>
