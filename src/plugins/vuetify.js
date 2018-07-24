import Vue from 'vue'
import {
   Vuetify,
   VApp,
   VCard,
   VNavigationDrawer,
   VFooter,
   VList,
   VIcon,
   VGrid,
   VToolbar,
   transitions
} from 'vuetify'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
   components: {
      VApp,
      VCard,
      VNavigationDrawer,
      VFooter,
      VList,
      VIcon,
      VGrid,
      VToolbar,
      transitions
   },
   theme: {
      primary:  "#90caf9",
      secondary: "#90caf9",
      accent: "#B388FF",
      error: "#FF8A80",
      warning: "#FFFF8D",
      info: "#82B1FF",
      success: "#CCFF90"
   },
})