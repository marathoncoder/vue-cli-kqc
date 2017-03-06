<template>
  <div id="app">
    <h2>To do list {{len}}</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import todos from './components/todos'

export default {
    name: 'app',
    mounted(){
        this.$store.dispatch('getTodos')
    },
    computed:{
      len(){
        return this.$store.state.todos.length
      }
    },
    components: {
        todos
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
