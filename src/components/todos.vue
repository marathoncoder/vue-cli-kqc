<template>
	<div id="todo">
		<ul class="list-group">
		  <li class="list-group-item clearfix" v-for="(todo, index) in todos">
			  <div class="col-lg-10 col-md-10 text-left" v-bind:class="{'complated' : todo.complate}">
		  	  <router-link :to="{ name: 'todo', params: { id: todo._id }}">{{ todo.title }}</router-link>
			  </div>
			  <div class="col-lg-2 col-md-10 text-right">
			  <button class="btn btn-success btn-xs" 
			  v-bind:class="[todo.complate ? 'btn-success' : 'btn-danger']"
			  v-on:click="toggleCompletion(todo)">
			  {{todo.complate ? 'complate' : 'undo'}}</button>
			  <button class="btn btn-warning btn-xs" v-on:click="deleteTodo(todo, index)">del</button></div>
		  </li>
		</ul>
		<todos-form></todos-form>
	</div>
</template>

<script type="text/javascript">
	import todosForm from './todosForm'

	export default {
		computed:{
			todos(){
				return this.$store.state.todos
			}
		},
		methods :{
			deleteTodo(todo, index){
				this.$store.dispatch('delTodo', todo, index)
			},
			toggleCompletion(todo){
				this.$store.dispatch('complateTodo', todo)
			}
		},		
		components: { todosForm }
	} 
</script>

<style type="text/css">
	.complated {
		color: #5cb85c;
		text-decoration: line-through;
	}
</style>