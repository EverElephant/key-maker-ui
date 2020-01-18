import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/axios'
import qs from 'qs'

Vue.config.productionTip = false
Vue.axios.defaults.baseURL = 'http://111.229.122.45:8089'
// Vue.axios.defaults.baseURL = 'http://localhost:8089'
Vue.axios.defaults.withCredentials = true
Vue.prototype.qs = qs

Vue.axios.interceptors.response.use(res => {
    return res
}, error => {
    if(error.response.status == 401){
        router.push("login")
    }else {
        return
    }
}
);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
