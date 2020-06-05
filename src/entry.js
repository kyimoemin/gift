import GiftAnimation from "./App.vue";
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("GiftAnimation", GiftAnimation);
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

GiftAnimation.install = install;

export default GiftAnimation;
