import App from "./App.vue";
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("Gift", App);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

App.install = install;

export default App;
