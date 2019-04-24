import Vue from 'vue';
import router from './router';
import 'vue2-animate/dist/vue2-animate.min.css';

new Vue({
  el: '#app',
  router,
  template:`<router-view/>`,
})
