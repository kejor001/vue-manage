<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover" class="user2">
        <div class="user1">
          <div class="user">
            <img src="../assets/img/user.jpg" alt="" />
            <div class="userInfo">
              <p class="name">Kejor</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆的时间:<span>2022/9/15</span></p>
          <p>上次登陆的地点:<span>提瓦特</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 580px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(item, index) in tableLabel"
            :key="index"
            :prop="index"
            :label="item"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          class="num-card"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: flex, padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num-p">￥{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts" width:400px></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 240px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 240px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { getData } from "../network/data.js";
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [],
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 6666,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1222,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 1234,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then((res) => {
      const code = res.data.code;
      const data = res.data.data;
      if (code === 2000) {
        this.tableData = data.tableData;
        const order = data.orderData;
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };
        const E = echarts.init(this.$refs.echarts);
        E.setOption(option);
        //用户图
        const userOption = {
          legend: {
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            data: data.userData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: "新增用户",
              data: data.userData.map((item) => item.new),
              type: "bar",
            },
            {
              name: "活跃用户",
              data: data.userData.map((item) => item.active),
              type: "bar",
            },
          ],
        };
        const U = echarts.init(this.$refs.userEcharts);
        U.setOption(userOption);
        //饼图
        const videoOption = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: "pie",
            },
          ],
        };
        const V = echarts.init(this.$refs.videoEcharts);
        V.setOption(videoOption);
      }
      console.log(res);
    });
  },
};
</script>

<style>
.graph {
  display: flex;
  padding-top: 30px;
  justify-content: space-between;
}
.graph .el-card {
  width: 48%;
}
.num {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.num-card {
  padding-bottom: 2px;
  width: 26%;
  height: 90px;
  margin-right: 60px;
  margin-bottom: 50px;
  /* display: flex; */
}
.num-p {
  font-size: 20px;
  padding-left: 20px;
}
.txt {
  font-size: 10px;
  padding-left: 20px;
}
.icon {
  position: relative;
  top: -18px;
  width: 70px;
  height: 100px;
  display: inline-block;
  text-align: center;
  line-height: 90px;
  font-size: 30px;
  color: white;
}
.detail {
  display: inline-block;
}

.el-card {
  margin-top: -20px;
}
.user {
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  /* border-bottom: 1px solid gray; */
}
.user img {
  width: 80px;
  height: 80px;
  padding-right: 40px;
  /* border-radius: 50%; */
  margin-bottom: 10px;
}
.name {
  font-size: 20px;
}
.access {
  font-size: 10px;
}
.user1 {
  border-bottom: 1px solid gray;
}
.login-info {
  font-size: 10px;
}
.login-info span {
  margin-left: 40px;
}
</style>