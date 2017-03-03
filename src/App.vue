<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <todos v-bind:todos="todos"></todos>
    <todos-form :todos="todos"></todos-form>
  </div>
</template>

<script>
import todos from './components/todos'
import todosForm from './components/todosForm'

export default {
  name: 'app',
  data(){
    return {
        todos: [
            {id: 1, title: 'learn vuejs', complate: false}
        ]
    }
  },
  components: {
    todos, todosForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
