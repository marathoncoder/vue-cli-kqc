// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import Vuex from 'vuex'
// import axios  from 'axios'
// import vueAxios from 'vue-axios'

Vue.config.productionTip = false

// Vue.use(Vuex)
// Vue.use(vueAxios, axios)

// const store = new Vuex.Store({
//     state: {
//         todos: []
//     },
//     mutations: {
//         increment(state) {
//             state.count++
//         }
//     },
//     actions:{
//     	get_todo_list(){

//     	}
//     }
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // router,
    template: '<App/>',
    components: { App }
    // store
})
