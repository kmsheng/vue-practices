<template>
  <div class="page-todo-list">
    <h1 v-once>{{title}}</h1>
    <button v-on:click="toggleTodoList()">toggle todo list</button>
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todoMessage" />
    </form>
    <ul v-show="isTodoListVisible">
      <li v-for="todo in todos">{{todo.message | toUpperCase | lastLetterToLowerCase}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageTodoList',
  data() {
    return {
      title: 'Page Todo List',
      isTodoListVisible: true,
      todoMessage: '',
      todos: [
        {message: 'Foo'},
        {message: 'Bar'}
      ]
    };
  },
  filters: {
    toUpperCase(value = '') {
      return value.toUpperCase();
    },
    lastLetterToLowerCase(value = '') {
      return value.slice(0, value.length - 2) + value.charAt(value.length - 1).toLowerCase();
    }
  },
  methods: {
    addTodo() {
      this.todos.push({message: this.todoMessage});
      this.todoMessage = '';
    },
    toggleTodoList() {
      this.isTodoListVisible = ! this.isTodoListVisible;
    }
  }
};
</script>

<style scoped>
</style>
