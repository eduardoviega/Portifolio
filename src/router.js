import Vue from 'vue'
import Router from 'vue-router'

import Inicio from './components/inicio/Inicio.vue'
import Sobre from './components/sobre/Sobre.vue'
import Experiencias from './components/experiencias/Experiencias.vue'
import Projetos from './components/projetos/Projetos.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/Portifolio/', component: Inicio },
        { path: '/Portifolio/sobre', component: Sobre },
        { path: '/Portifolio/experiencias', component: Experiencias },
        { path: '/Portifolio/projetos', component: Projetos },
    ]
}) 