<template>
  <div class="home">
    <h1>个人中心</h1>
    <a-button type="primary">
      User
    </a-button>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class User extends Vue {}
</script>
