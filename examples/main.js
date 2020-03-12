import Vue from 'vue';
import App from './App.vue';
import { EmojiTextarea, EmojiWord } from '../packages/index';

Vue.use(EmojiTextarea);
Vue.use(EmojiWord);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
