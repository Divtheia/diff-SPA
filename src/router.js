import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import About from './About.vue';
import Booking from './Booking.vue';
import Courses from './Courses.vue';
import CourseList from './CourseList.vue';
import Basic from './courses/Basic.vue';
import Advanced from './courses/Advanced.vue';
import Extreme from './courses/Extreme.vue';

import Drink from'./Drink/Drink.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
        path: '/', 
        component: App, 
        children: [
            {path: 'About', component: About},
            {path: 'booking', component: Booking},
            {
            path: 'courses', 
            component: Courses,
            children: [
                {path: '', component: CourseList},
                {path: 'basic', component: Basic},
                {path: 'advanced', component: Advanced},
                {path: 'extreme', component: Extreme},
                ]},
            {path: 'drink', component: Drink},
        ]},
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y:225 }
    },
  })

