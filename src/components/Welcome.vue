<template>
  <section id="welcome">
    <v-parallax src="@/assets/img/bgHero.jpg" height="750">
      <CheckContract />
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4">
                Tron Smart Contract
              </h1>
              <h1 class="font-weight-light">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Maiores porro voluptatibus <br />
                delectus nam optio harum!
              </h1>
              <v-btn rounded outlined large dark class="primary mt-5"
                >Connect Wallet</v-btn
              >
              <CurrentProfit />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
  </section>
</template>

<script>
import CheckContract from "@/components/CheckContract";
import CurrentProfit from "@/components/CurrentProfit";

export default {
  name: "Welcome",
  components: {
    CheckContract,
    CurrentProfit
  }
};
</script>

<style>
#welcome {
  z-index: 0;
}

section {
  position: relative;
}
</style>
