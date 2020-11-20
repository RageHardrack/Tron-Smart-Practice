<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      class="primary"
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-btn text class="ml-auto warning">
              <span>Contest</span>
            </v-btn>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          @click="$vuetify.goTo(item.link)"
        >
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#welcome')">
          <span class="mr-2">Smart Investment Plans</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#qa')">
          <span class="mr-2">Q&A</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#invest')">
          <span class="mr-2">Make Investment</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#promote')">
          <span class="mr-2">Promote Us</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#subscribe')">
          <span class="mr-2">Subscribe</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    color: String,
    flat: Boolean
  },
  data() {
    return {
      drawer: null,
      items: [
        { text: "Smart Investment Plans", link: "#welcome" },
        { text: "Q&A", link: "#qa" },
        { text: "Make Investment", link: "#invest" },
        { text: "Promote Us", link: "#promote" },
        { text: "Subscribe", link: "#subscribe" }
      ],
      isXs: false
    };
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 1264;
    }
  },
  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}
.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>
