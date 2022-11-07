import Vue from 'vue'
import Router from 'vue-router'
import TestTask1 from './components/TestTask1'
import TestTask2 from './components/TestTask2'
import TestTask3 from './components/TestTask3'


Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'testtask1',
            component: TestTask1
        },
        {
            path: '/testtask2',
            name: 'testtask2',
            component: TestTask2
        },
        {
            path: '/testtask3',
            name: 'testtask3',
            component: TestTask3
        }
    ]
})

export default router