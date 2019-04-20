import VueRouter from 'vue-router'

import Me from '../features/Me'
import Home from '../features/Home'
import SignIn from '../features/SignIn'
import SignUp from '../features/SignUp'
import About from '../features/About'
import Terms from '../features/Terms'
import Privacy from '../features/Privacy'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/signin', component: SignIn },
    { path: '/signup', component: SignUp },
    { path: '/me', component: Me },
    { path: '/about', component: About },
    { path: '/terms', component: Terms },
    { path: '/privacy', component: Privacy },
  ]
})

export default router
