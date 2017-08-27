<template>
  <ul>
    <li v-for="todo in value">{{todo.message | toUpperCase | lastLetterToLowerCase}}</li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: ['value'],
  filters: {
    toUpperCase(value = '') {
      return value.toUpperCase();
    },
    lastLetterToLowerCase(value = '') {
      return value.slice(0, value.length - 2) + value.charAt(value.length - 1).toLowerCase();
    }
  }
};
</script>
