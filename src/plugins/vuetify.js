import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.indigo.darken3,
        secondary: colors.amber.accent3,
        accent: colors.indigo.base,
        error: colors.red.accent3,
        info: colors.blue.darken1
      }
    }
  }
});
