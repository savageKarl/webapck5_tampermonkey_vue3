import { createApp } from "vue";
import App from "./App.vue";
// 即使配置自动按需引入组件也要在这里引入组件样式，不然会有样式丢失
import "element-plus/dist/index.css";

import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import Cookies from 'js-cookie'

// 这里再手动匹配是因为油猴脚本不支持 url有hash参数匹配
// 在这里匹配指定的url，然后插入vue app
if (RegExp("").test(location.href)) {
  // console.debug("匹配");
  const contianer = document.createElement("div");
  contianer.id = "scriptBox";
  document.body.appendChild(contianer);
  const app = createApp(App);
  const pinia = createPinia()
  pinia.use(piniaPersist)
  app.use(pinia); 
  app.mount("#scriptBox");
} else {
  // console.debug('匹配不到')
}

