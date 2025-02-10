import { CodeTabs } from "/Users/martin/Development/http/app/vue/vue-box/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_typescript@5.7.3_vuepress@_81cf258c9f9a3c839ad2b120dcf5669f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/Users/martin/Development/http/app/vue/vue-box/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_typescript@5.7.3_vuepress@_81cf258c9f9a3c839ad2b120dcf5669f/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/Users/martin/Development/http/app/vue/vue-box/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.74_markdown-it@14.1.0_typescript@5.7.3_vuepress@_81cf258c9f9a3c839ad2b120dcf5669f/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
