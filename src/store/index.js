import router from '@/router'
import Cookie from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse: false,
    tabsList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      },
    ],
    currentMenu: null,
    token: '',
    menu: []
  },
  getters: {
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val;
        const result = state.tabsList.findIndex(item => item.name === val.name)
        if (result === -1) {
          state.tabsList.push(val)
        }
      } else {
        state.currentMenu = null
      }
    },
    colseTag(state, val) {
      const result = state.tabsList.findIndex(item => item.name === val.name)
      state.tabsList.splice(result, 1)
    },
    setToken(state, val) {
      state.token = val;
      Cookie.set('tooken', val);
    },
    clearToken(state) {
      state.token = '',
        Cookie.remove('token')
    },
    getToken(state) {
      state.token = state.token || Cookie.get('token');
    },
    setMenu(state, val) {
      state.menu = val;
      Cookie.set('menu', JSON.stringify(val));
    },
    clearMenu(state) {
      state.menu = [],
        Cookie.remove('menu');
    },
    addMenu(state, router) {
      if (!Cookie.get('menu')) {
        return
      };
      const menu = JSON.parse(Cookie.get('menu'));
      state.menu = menu;
      const menuArray = [];
      const fuck = menu.forEach(item => {
        if (item.children) {
          item.children = item.children.map(item => {
            item.component = () => import(`../views/${item.url}`);
            return item
          })
          menuArray.push(...item.children)
        } else {
          item.component = () => import(`../views/${item.url}`)
          menuArray.push(item);
        }
      })
      menuArray.forEach(item => {
        router.addRoute('Main', item)
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
