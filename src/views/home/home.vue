<template>
  <div class="home">
    <h1>DDD商城</h1>
    <h2>欢迎用户 xxx</h2>
    <a-button type="primary">
      Primary
    </a-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
