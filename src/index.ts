import { createApp } from "vue/dist/vue.esm-bundler";

import SmartyUI, {
  SFCButton,
  JSXButton,
  MyButton,
} from "../dist/smarty-ui.mjs";
import "../dist/assets/entry.c65a9c73.css";
createApp({
  template: `
            <div>
                <SButton>普通按钮</SButton>
            </div>
        `,
})
  .use(SmartyUI)
  .mount("#app");
