import Vue from 'vue';
import Router from 'vue-router';
import PageHome from '@/components/PageHome';
import PageTodoList from '@/components/PageTodoList';
import PageCounter from '@/components/PageCounter';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome,
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
