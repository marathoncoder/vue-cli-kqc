import Vue from 'vue'
import Router from 'vue-router'
import todos from '@/components/todos'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
	    {
	        path: '/',
	        name: 'todos',
	        component: todos
	    },
	    {
	        path: '/todo/:id',
	        name: 'todo',
	        component: todo
	    }
    ]
})
