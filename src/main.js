// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios  from 'axios'
import vueAxios from 'vue-axios'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(vueAxios, axios)

const store = new Vuex.Store({
	//全局数据，子组件中都可以用到
    state: {
        todos: [],
        todo: { id: null, title: '', complate: false }
    },
    //唯一改变status的地方
    mutations: {
        get_todos_list(state, todos) {
            state.todos = todos
        },
        create_todo(state, todo){
        	state.todos.push(todo)
        },
        complate_todo(state, todo){
        	todo.complate = ! todo.complate
        },
        del_todo(state, index){
        	state.todos.splice(index, 1)
        }
    },
    // 远程获取数据，通过commit call mutations
    actions:{
    	getTodos(store){
    		//注意：这里面axios要用Vue.axios来获取，而非this.axios
    		Vue.axios.get('http://127.0.0.1:3000/api/todoList').then((reponse) => {
		        store.commit('get_todos_list', reponse.data);
		    })
    	},
    	createTodo(store, todo){
    		Vue.axios.post('http://127.0.0.1:3000/api/createTodo',{title: todo.title}).then((reponse) => {
				store.commit('create_todo', todo);
			})
			store.todo = { id: null, title: '', complate: false }
    	},
    	complateTodo(store,todo){
    		Vue.axios.get('http://127.0.0.1:3000/api/complate/'+todo._id).then((reponse) => {
				store.commit('complate_todo', todo);
			})
    	},
    	delTodo(store, todo, index) {
    		Vue.axios.get('http://127.0.0.1:3000/api/delTodo/'+todo._id).then((reponse) => {
				store.commit('del_todo', index);
			})
    	}
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    store
})
