<template>
  <div id="app">
    <router-view />
    <app-bar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import appBar from '@/components/app-bar.vue'

@Component({
  components:{
    appBar
  }
})
export default class App extends Vue {}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
