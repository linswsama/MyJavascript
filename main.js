import Vue from 'vue'
import App from './App'
import $http from './api/http.js'

Vue.prototype.http = $http;
Vue.config.productionTip = false



//引入自定义tabbar
import tabBar from 'components/tabbar.vue'
Vue.component('tab-bar',tabBar)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
