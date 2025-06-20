import { createSSRApp } from 'vue'
import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';
import App from './App.vue';

const routes = [
  {path:'/', redirect:'/contactus'},
  { path: '/contactus', component: ()=>import("./components/contactus.vue") },
  { path: '/help', component: ()=> import("./components/help.vue") }
];

// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp() {
  const app = createSSRApp(App);
  const history = typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory();
  // const history = createWebHistory();
  const router = createRouter({ history, routes });
  app.use(router);
  return { app, router };
}
