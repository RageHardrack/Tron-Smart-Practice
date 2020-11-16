<template>
  <v-app class="app">
    <!-- Componente Nav -->
    <Navigation />
    <v-main>
      <v-row justify="center">
        <v-col cols="8">
          <!-- Una vista para revisar el contrato -->
          <CheckContract />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <!-- Indicando de qué va -->
          <Welcome />
        </v-col>

        <v-col cols="6">
          <!-- Info del Profit -->
          <CurrentProfit />
        </v-col>
      </v-row>

      <v-row justify="end">
        <v-col cols="4">
          <!-- Calculadora de intereses -->
          <InterestCalculator />
        </v-col>
      </v-row>

      <v-row justify="center">
        <v-col cols="10">
          <!-- Respuesta de los intereses calculados anteriormente -->
          <GetStarted />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <!-- Por qué invertir en este contrato -->
          <Why />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <!-- Condiciones para inversion -->
          <InvestConditions />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <!-- Cómo hacer un depósito -->
          <How />
        </v-col>
      </v-row>
    </v-main>

    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>

    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation";
import CheckContract from "@/components/CheckContract";
import Welcome from "@/components/Welcome";
import CurrentProfit from "@/components/CurrentProfit";
import InterestCalculator from "@/components/InterestCalculator";
import GetStarted from "@/components/GetStarted";
import Why from "@/components/Why";
import How from "@/components/How";
import Footer from "@/components/Footer";
import InvestConditions from "@/components/InvestConditions";

export default {
  name: "App",

  components: {
    Navigation,
    CheckContract,
    Welcome,
    CurrentProfit,
    InvestConditions,
    Footer,
    How,
    Why,
    GetStarted,
    InterestCalculator
  },
  data: () => ({
    fab: null
  }),
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
