import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import App from './components/App.vue';

Vue.use(Vuetify);

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
});
