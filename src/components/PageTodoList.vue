<template>
  <div class="page-todo-list">
    <h1>Todo List</h1>
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todoMessage" />
    </form>
    <ul>
      <li v-for="todo in todos">{{todo.message}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageTodoList',
  data() {
    return {
      todoMessage: '',
      todos: [
        {message: 'Foo'},
        {message: 'Bar'}
      ]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({message: this.todoMessage});
      this.todoMessage = '';
    }
  }
};
</script>

<style scoped>
</style>
