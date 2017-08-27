<template>
  <div class="page-counter">
    <h1>Page Counter</h1>
    <button v-on:click="add()">add</button>
    <button v-on:click="minus()">minus</button>
    <div>sign: {{sign}}</div>
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
</style>
