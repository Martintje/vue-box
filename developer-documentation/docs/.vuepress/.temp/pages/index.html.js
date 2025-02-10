import comp from "/Users/martin/Development/http/app/vue/vue-box/developer-documentation/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Developer documentation\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Developer documentation\"},\"headers\":[{\"level\":2,\"title\":\"Initial setup\",\"slug\":\"initial-setup\",\"link\":\"#initial-setup\",\"children\":[{\"level\":3,\"title\":\"Repo - Design system\",\"slug\":\"repo-design-system\",\"link\":\"#repo-design-system\",\"children\":[]},{\"level\":3,\"title\":\"Repo - Typescript utilities\",\"slug\":\"repo-typescript-utilities\",\"link\":\"#repo-typescript-utilities\",\"children\":[]},{\"level\":3,\"title\":\"Monorepo\",\"slug\":\"monorepo\",\"link\":\"#monorepo\",\"children\":[]},{\"level\":3,\"title\":\"Repo - Developer documentation\",\"slug\":\"repo-developer-documentation\",\"link\":\"#repo-developer-documentation\",\"children\":[]}]}],\"git\":{\"updatedTime\":1739207335000,\"contributors\":[{\"name\":\"MartinOvermars\",\"username\":\"MartinOvermars\",\"email\":\"m.overmars@atabix.nl\",\"commits\":1,\"url\":\"https://github.com/MartinOvermars\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
