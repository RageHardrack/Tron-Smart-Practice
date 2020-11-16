<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="10">
        <v-card elevation="12">
          <v-row justify="center">
            <v-card-title class="display-2" primary-title>
              Interest Calculator
            </v-card-title>
          </v-row>

          <v-row>
            <v-col cols="12">
              <input class="ml-10" type="text" placeholder="100" />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-card-subtitle>
                <h3>Daily Profit When Started</h3>
              </v-card-subtitle>
            </v-col>

            <v-col cols="6">
              <v-chip>2.00%</v-chip>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card-subtitle>
                <h3>Current Profit Per Day</h3>
              </v-card-subtitle>
            </v-col>

            <v-col>
              <v-chip>2.12%</v-chip>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card-subtitle>
                <h3>Maximun Profit Per Day</h3>
              </v-card-subtitle>
            </v-col>

            <v-col>
              <v-chip>Contract Limit 4.00% Daily</v-chip>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card-subtitle>
                <h3>Personal Hold Bonus Limit</h3>
              </v-card-subtitle>
            </v-col>

            <v-col>
              <v-chip>1.00%</v-chip>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "InterestCalculator"
};
</script>

<style></style>
