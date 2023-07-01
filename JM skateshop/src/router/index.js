import {CreateRouter, createWebHistory} from 'vue-router'

import Home from '../components/pages/Home.vue'
import Product from '../components/pages/Product.vue'


const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/produto',
        component: Product
    }

]

const router = CreateRouter( {  
    history: createWebHistory(),  
    routes
})
export default router