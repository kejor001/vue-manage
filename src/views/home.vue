<template>
  <div class="home">
    <el-container>
      <el-aside width="auto">
        <comment-aside></comment-aside>
      </el-aside>
      <el-container>
        <el-header>
          <comment-header></comment-header>
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommentAside from "../components/CommentAside.vue";
import CommentHeader from "../components/CommentHeader.vue";
import commonTag from "../components/commonTag.vue";

export default {
  components: {
    CommentAside,
    CommentHeader,
    commonTag,
  },
  data() {},
};
</script>

<style>
.el-header {
  background-color: #333;
}
</style>