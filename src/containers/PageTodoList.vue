<template>
  <div class="page-todo-list">
    <h1 v-once>{{title}}</h1>
    <button v-on:click="toggleTodoList()">toggle todo list</button>
    <form v-on:submit.prevent="addTodo">
      <input type="text" v-model="todoMessage" />
    </form>
    <todo-list v-show="isTodoListVisible" v-model="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';

export default {
  components: {TodoList},
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
