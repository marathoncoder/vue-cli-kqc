<template>
	<form v-on:submit="addTodo(newTodo)">
		<div class="form-group">
			<input class="form-control" placeholder="add new todo" v-model="newTodo.title"/>
		</div>
		<button class="btn btn-info" type="submit">add new todo</button>
	</form>
</template>

<script type="text/javascript">
	export default {
		computed: {
			newTodo(){
				return this.$store.state.todo
			}
		},
		methods: {
			addTodo(todo){
				this.$store.dispatch('createTodo', todo)
			}
		}
	}
</script>