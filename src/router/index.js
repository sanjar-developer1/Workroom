import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../pages/SignInUp/sigIn.vue"
import SignUp from "../pages/SignInUp/signUp.vue"
const routes = [
    {
        path: "/",
        component: SignIn
    },
    {
        path: "/signUp",
        component: SignUp
    },


]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
