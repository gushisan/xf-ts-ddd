import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Button,
  Row,
  Col,
  Icon,
  Tag,
  Modal
} from 'ant-design-vue';

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Modal);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
