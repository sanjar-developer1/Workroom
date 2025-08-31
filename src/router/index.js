import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../pages/SignInUp/signIn.vue"
import SignUp from "../pages/SignInUp/signUp.vue"
import Step1 from "../pages/SignInUp/SignUp/step1.vue";
import Step2 from "../pages/SignInUp/SignUp/step2.vue";
import Step3 from "../pages/SignInUp/SignUp/step3.vue";
import Step4 from "../pages/SignInUp/SignUp/step4.vue";
import Step5 from "../pages/SignInUp/SignUp/step5.vue";
import AddProject from "../pages/Add/addProject.vue"
import OneTask from "../pages/Add/oneTask.vue"
import Projects from "../pages/Add/projects.vue"
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
    {
        path: "/step4",
        component: Step4
    },
    {
        path: "/step5",
        component: Step5
    },
    {
        path: "/addProject",
        component: AddProject
    },
    {
        path: "/oneTask",
        component: OneTask
    },
    {
        path: "/projects",
        component: Projects
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
