<template>
    <nav class="navbar navbar-expand-md navbar-dark py-1 px-2"
        style="background: #232526; background: linear-gradient(to top, #414345, #232526);">
        <router-link to="/" class="navbar-brand mb-0 h1 mx-2 nome">Eduardo <span>Viega</span></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse mx-4" id="navbarSupportedContent">
            <v-spacer />
            <ul class="navbar-nav mr-0 my-2">
                <li class="nav-item impar">
                    <router-link to="/" class="nav-link"><span>Início</span></router-link>
                </li>
                <li class="nav-item par">
                    <router-link to="/sobre" class="nav-link"><span>Sobre mim</span></router-link>   
                </li>
                <li class="nav-item impar">
                    <router-link to="/experiencias" class="nav-link"><span>Experiências</span></router-link>   
                </li>
                <li class="nav-item par">
                    <router-link to="/projetos" class="nav-link"><span>Projetos</span></router-link>
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
* {
	margin: 0;
    transition: all .2s;
}
.nav-item span {
    color: #fff;
}
.navbar-brand:hover span {
    color: #cf41ae;
}
.navbar-brand:hover {
    color: #3dafd2;
}
.nome {
    font-size: x-large;
    font-weight: bold;
}
.nav-item {
    font-weight: bold;
    margin: 2px 3px;
    padding: 0 8px;
    border-radius: 8px;
}
.impar:hover {
    background-color: #3dafd2;
}
.par:hover {
    background-color: #cf41ae;
}
</style>