<template>
  <div class="app-bar">
    <a-row>
      <a-col :span="6">
        <router-link to="/">
          <a-icon type="home" />
          商城主页
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="/lottery">
          <a-icon type="red-envelope" />
          抽奖活动
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="/interest">
          <a-icon type="pay-circle" />
          积分中心
        </router-link>
      </a-col>
      <a-col :span="6">
        <router-link to="/user">
          <a-icon type="user" />
          个人中心
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.app-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 75px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.app-bar i {
  display: block;
  font-size: 24px;
  margin: 10px 0;
}
.app-bar a {
  font-weight: bold;
  color: #2c3e50;
}

.app-bar a.router-link-exact-active {
  color: #42b983;
}
</style>
