import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UsersView from '../views/UsersView.vue'
import UserDetailView from '../views/UserDetailView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/usuarios', component: UsersView },
        { path: '/usuarios/:id', component: UserDetailView, props: true }
    ]
})