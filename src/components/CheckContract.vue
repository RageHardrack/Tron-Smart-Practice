<template>
  <!-- Datos sobre el contrato mostrados al inicio de la pantalla -->
  <v-container width="100%">
    <v-card class="d-flex" rounded>
      <v-container>
        <v-card-title>
          Current platform balance:
        </v-card-title>
        <v-card-subtitle>
          9,655,432.12 TRX
        </v-card-subtitle>
      </v-container>

      <v-container>
        <v-card-title>
          Current Platform Profit - 2.12 %
        </v-card-title>
        <v-card-subtitle>
          Next Change to 2.13 % in 920,128.16 TRX
        </v-card-subtitle>
      </v-container>
      <v-card-title>
        <v-btn class="primary">Check Contract</v-btn>
      </v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
v-card {
  background-color: "#ffff";
}
</style>
