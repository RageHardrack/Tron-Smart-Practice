<template>
  <v-app class="app">
    <!-- NAVIGATION Top de la pantalla será transparente -->
    <Navigation :color="color" :flat="flat" />
    <v-main class="ma-0 pa-0">
      <Welcome />
      <InterestCalculator />
      <GetStarted />
      <Why />
      <InvestConditions />
      <How />
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

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import Navigation from "@/components/Navigation";
import Welcome from "@/components/Welcome";
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
    Welcome,
    InvestConditions,
    Footer,
    How,
    Why,
    GetStarted,
    InterestCalculator
  },
  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  data: () => ({
    fab: null,
    color: "",
    flat: null
  }),
  watch: {
    fab(value) {
      if (value) {
        this.color = "primary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    }
  },
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
