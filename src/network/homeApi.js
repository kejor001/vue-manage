import Mock from 'mockjs'

let List = [];
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 8000, 0, 0),
                    vivo: Mock.Random.float(100, 8000, 0, 0),
                    oppo: Mock.Random.float(100, 8000, 0, 0),
                    魅族: Mock.Random.float(100, 8000, 0, 0),
                    三星: Mock.Random.float(100, 8000, 0, 0),
                    小米: Mock.Random.float(100, 8000, 0, 0)
                })
            )
        }
        return {
            code: 2000,
            data: {
                //饼图
                videoData: [
                    {
                        name: '小米',
                        value: 2999
                    },
                    {
                        name: '苹果',
                        value: 6999
                    },
                    {
                        name: 'oppo',
                        value: 2999
                    },
                    {
                        name: 'vivo',
                        value: 1999
                    },
                    {
                        name: '魅族',
                        value: 1880
                    },
                    {
                        name: '三星',
                        value: 7990
                    },
                ],
                //柱状图
                userData: [
                    {
                        data: '周一',
                        new: 5,
                        active: 200
                    },
                    {
                        data: '周二',
                        new: 10,
                        active: 500
                    },
                    {
                        data: '周三',
                        new: 20,
                        active: 300
                    },
                    {
                        data: '周四',
                        new: 78,
                        active: 900
                    },
                    {
                        data: '周五',
                        new: 40,
                        active: 230
                    },
                    {
                        data: '周六',
                        new: 27,
                        active: 340
                    },
                    {
                        data: '周日',
                        new: 87,
                        active: 570
                    },
                ],
                //折线图
                orderData: {
                    date: ['20191001', '20191002', '20191003', '20191004', '20191005', '20191006', '20191007'],
                    data: List
                },
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 500,
                        monthBuy: 800,
                        totalBuy: 56000
                    },
                    {
                        name: 'vivo',
                        todayBuy: 350,
                        monthBuy: 1200,
                        totalBuy: 12000
                    },
                    {
                        name: '苹果',
                        todayBuy: 900,
                        monthBuy: 9500,
                        totalBuy: 99000
                    },
                    {
                        name: '小米',
                        todayBuy: 700,
                        monthBuy: 6500,
                        totalBuy: 23000
                    },
                    {
                        name: '三星',
                        todayBuy: 100,
                        monthBuy: 1500,
                        totalBuy: 34000
                    },
                    {
                        name: '魅族',
                        todayBuy: 50,
                        monthBuy: 2500,
                        totalBuy: 66000
                    },
                    {
                        name: '红魔',
                        todayBuy: 50,
                        monthBuy: 2500,
                        totalBuy: 66000
                    },
                    {
                        name: '黑鲨',
                        todayBuy: 50,
                        monthBuy: 2500,
                        totalBuy: 66000
                    },
                    {
                        name: 'iQOO',
                        todayBuy: 50,
                        monthBuy: 2500,
                        totalBuy: 66000
                    }
                ]
            }
        }
    }
}