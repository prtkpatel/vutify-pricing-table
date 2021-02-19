import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        limitedTimeOffer: 'linear-gradient(to right, #5831a0, #cc0ead)',
        background:'#f8f8f8'
      },
    },
  },
});
