<template>
    <nav class="navbar navbar-expand-sm navbar-dark py-3 px-2"
        style="background: #232526; background: linear-gradient(to left, #414345, #232526);">
        <router-link to="/" class="navbar-brand mb-0 h1 mx-2 nome">Eduardo <span>Viega</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse mx-4" id="navbarSupportedContent">
            <v-spacer />
            <ul class="navbar-nav mr-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Início</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/sobre" class="nav-link">Sobre mim</router-link>   
                </li>
                <li class="nav-item">
                    <router-link to="/experiencias" class="nav-link">Experiências</router-link>   
                </li>
                <li class="nav-item">
                    <router-link to="/projetos" class="nav-link">Projetos</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.nome {
    font-size: x-large;
}
.nome span {
    color: #10b981;
}
.nav-item {
    margin-left: 5px;
    border-radius: 8px;
    transition: all .2s;
}
.nav-item:hover {
    background-color: #10b981;
}
</style>