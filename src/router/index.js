import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../pages/SignInUp/sigIn.vue"
import SignUp from "../pages/SignInUp/signUp.vue"
import Step1 from "../pages/SignInUp/SignUp/step1.vue";
import Step2 from "../pages/SignInUp/SignUp/step2.vue";
import Step3 from "../pages/SignInUp/SignUp/step3.vue";
const routes = [
    {
        path: "/",
        component: SignIn
    },
    {
        path: "/signUp",
        component: SignUp
    },
    {
        path: "/step1",
        component: Step1
    },
    {
        path: "/step2",
        component: Step2
    },
    {
        path: "/step3",
        component: Step3
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
