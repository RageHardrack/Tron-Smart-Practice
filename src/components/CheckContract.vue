<template>
  <div class="mt-12">
    <!-- Datos sobre el contrato mostrados al inicio de la pantalla -->
    <v-card class="d-flex mt-10 pa-0" flat>
      <v-container>
        <v-row align="center">
          <v-col md="4">
            <h4>
              Current platform balance:
            </h4>
            <h5 class="grey--text">
              9,655,432.12 TRX
            </h5>
          </v-col>

          <v-col md="4">
            <h4>
              Current Platform Profit - 2.12 %
            </h4>
            <h5 class="grey--text">
              Next Change to 2.13 % in 920,128.16 TRX
            </h5>
          </v-col>

          <v-col md="4">
            <v-card-actions>
              <v-btn class="primary">Check Contract</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
v-card {
  background-color: "#ffff";
}
</style>
