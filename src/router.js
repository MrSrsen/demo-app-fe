import { createWebHistory, createRouter } from 'vue-router';
import RegisterUserPage from "./page/RegisterUserPage.vue";
import ListUsersPage from "./page/ListUsersPage.vue";

const routes = [
    {
        path: '/',
        name: 'Register user',
        component: RegisterUserPage,
    },
    {
        path: '/list',
        name: "List all users",
        component: ListUsersPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
