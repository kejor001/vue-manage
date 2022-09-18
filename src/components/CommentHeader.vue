<template>
  <header class="header">
    <div class="left">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="changeMenu"
      ></el-button>
      <!-- <h3>首页</h3> -->
      <el-breadcrumb separator="/" class="myColor">
        <el-breadcrumb-item
          :to="{ path: item.path }"
          v-for="item in tags"
          :key="item.path"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown trigger="click" size="mini">
        <span> <img src="../assets/img/user.jpg" alt="" /> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="loginOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    changeMenu() {
      this.$store.commit("collapseMenu");
    },
    loginOut() {
      this.$store.commit("clearToken");
      this.$store.commit("clearMenu");
      this.$router.push("/login");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tabsList,
    }),
  },
};
</script>

<style>
.header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-content: center;
}
.el-button {
  height: 50%;
  line-height: 100%;
  margin-right: 20px;
}
h3 {
  color: #fff;
  margin-left: 20px;
  font-size: 10px;
}
.left {
  display: flex;
  align-items: center;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding-top: 10px;
}
</style>