import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routes'

// Vue.use(Vuex);
// Vue.use(axios);
// Vue.use(VueRouter);

const app = new Vue({
  el: '#app',
  // render: h => h(App),
  render(h) {
    return h(this.ViewComponent)
  },
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      // 每个 view 定义为一个 .vue 文件，在匹配的时候加载
      // const matchingView = routes[this.currentRoute]
      // return matchingView ?
      //   require('./pages/' + matchingView + '.vue') :
      //   require('./pages/404.vue')
      return routes[this.currentRoute] || NotFound
    }
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
