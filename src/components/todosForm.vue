<template>
	<form v-on:submit.prevent="addTodo(newTodo)">
		<div class="form-group">
			<input class="form-control" placeholder="add new todo" v-model="newTodo.title"/>
		</div>
		<button class="btn btn-info" type="submit">add new todo</button>
	</form>
</template>

<script type="text/javascript">
	export default {
		props: ['todos'], 
		data(){
			return {
				newTodo: { id: null, title: '', complate: false }
			}
		},
		methods: {
			addTodo(newTodo){
				this.todos.push(newTodo)
				this.newTodo = { id: null, title: '', complate: false }
			}
		}
	}
</script>