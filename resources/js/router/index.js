import Home from '../views/Home'
import About from '../views/About'

export default {
    mode: 'history',
    linkActiveClass: 'bg-primary',

    routes:[
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
    ]
}
