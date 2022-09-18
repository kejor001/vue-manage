<template>
  <div class="aside">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <!-- <el-radio-button :label="false">展开</el-radio-button> -->
      <!-- <el-radio-button :label="true">收起</el-radio-button> -->
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <h3 class="title">
        {{ isCollapse ? "后台" : "后台通用管理系统" }}
      </h3>
      <el-menu-item
        :index="item.path + ''"
        v-for="item in noChildren"
        :key="item.path"
        @click="menuClick(item)"
      >
        <i :class="`el-icon-` + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        :index="item.path + ''"
        v-for="item in haveChildren"
        :key="item.path"
      >
        <template slot="title">
          <i :class="`el-icon-` + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group
          v-for="(item1, index1) in item.children"
          :key="item1.path"
        >
          <!-- <span slot="title">分组一</span> -->

          <el-menu-item @click="menuClick(item1)" :index="item1.path + ''">
            <i :class="`el-icon-` + item1.icon"></i>

            {{ item1.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user-solid",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "setting",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "search",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "search",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuClick(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((res) => !res.children);
    },
    haveChildren() {
      return this.menu.filter((res) => res.children);
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.title {
  text-align: center;
  line-height: 48px;
  color: #fff;
}
.el-menu {
  height: 100vw;
  border: none;
}
.aside {
  position: relative;
  top: -21px;
  left: 0.5px;
}
</style>