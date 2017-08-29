<template>
  <div class="page-counter">
    <h1>Page Counter</h1>
    <button v-on:click="add()">add</button>
    <button v-on:click="minus()">minus</button>
    <div :class="sign">sign: {{sign}}</div>
    <div>{{$store.state.count}}</div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'PageCounter',
  computed: mapGetters([
    'sign'
  ]),
  methods: mapActions([
    'add',
    'minus'
  ])
};
</script>

<style scoped>
  .positive {
    background-color: #0f0;
  }
  .negative {
    background-color: #f00;
  }
</style>
