<template>
  <v-container>
    <h1>How To Make Deposit?</h1>

    <v-row>
      <v-col>
        <v-card>
          <v-container class="pa-5">
            <v-card-title>
              <h2>
                Make Deposit
              </h2>
            </v-card-title>

            <v-row>
              <v-card-subtitle>
                GET TRON (TRX)
              </v-card-subtitle>

              <v-card-action name="GET">
                <v-btn color="light">HOW TO GET TRX</v-btn>
              </v-card-action>
            </v-row>

            <v-row justify="center">
              <v-card-text class="text-center">
                <h2>Connect With Your Wallet App</h2>
              </v-card-text>

              <v-card-action name="Wallet">
                <v-btn color="light">Connect Wallet</v-btn>
              </v-card-action>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-container class="pa-5">
            <v-card-title>
              <h2>Request Withdraw</h2>
            </v-card-title>

            <v-card-text>
              <v-list>
                <v-list-item>
                  <v-card-subtitle>
                    Your Payout Will Come Instantly
                  </v-card-subtitle>
                </v-list-item>

                <v-list-item>
                  <v-card-subtitle>
                    Request Withdraw From The Same Wallet You Deposited
                  </v-card-subtitle>
                </v-list-item>
              </v-list>
            </v-card-text>

            <v-row justify="center">
              <v-card-text class="text-center">
                <h2>Connect With Your Wallet App</h2>
              </v-card-text>

              <v-card-action name="Wallet">
                <v-btn color="light">Connect Wallet</v-btn>
              </v-card-action>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "How"
};
</script>
