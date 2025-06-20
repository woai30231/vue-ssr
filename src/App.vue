<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

let linkArray = [
    {
        path: '/help',
        name: '帮助'
    },
    {
        path: '/contactus',
        name: '联系我们'
    }
]
export default {
  data(){
    return {
      linkArray
    }
  },
  computed:{
    selfprops(){
      return 'selfprops'
    }
  },
  components:{
    HelloWorld
  }
}
</script>

<template>
  <div>
    <nav>
        <ul>
            <li v-for="link in linkArray" :key="link.path">
                <router-link :to="link.path">{{ link.name }}</router-link>
            </li>
        </ul>

    </nav>

    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>

    <p>{{selfprops}}</p>
  </div>
  <HelloWorld msg="Vite + Vue" />

  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
