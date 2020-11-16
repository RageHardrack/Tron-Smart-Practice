<template>
  <!-- Una sencilla navegación -->
  <v-app-bar app elevate-on-scroll class="primary" dark>
    <v-toolbar-title>Tron Smart Contract</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text class="ml-auto">
      <span>Smart Investment Plans</span>
    </v-btn>
    <v-btn text class="ml-auto">
      <span>Q&A</span>
    </v-btn>
    <v-btn text class="ml-auto">
      <span>Make Investment</span>
    </v-btn>
    <v-btn text class="ml-auto">
      <span>Promote Us</span>
    </v-btn>
    <v-btn text class="ml-auto">
      <span>Subscribe</span>
    </v-btn>

    <v-btn text class="ml-auto warning">
      <span>Contest</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navigation"
};
</script>
