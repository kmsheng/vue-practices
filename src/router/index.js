import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import PageTodoList from '@/components/PageTodoList';
import PageCounter from '@/components/PageCounter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/todo-list',
      name: 'PageTodoList',
      component: PageTodoList
    },
    {
      path: '/counter',
      name: 'PageCounter',
      component: PageCounter
    }
  ],
});
