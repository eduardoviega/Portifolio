<template>
    <nav class="navbar navbar-expand-lg navbar-dark" 
        style="background: #232526; background: -webkit-linear-gradient(to right, #414345, #232526); 
            background: linear-gradient(to right, #414345, #232526);">
        <span class="navbar-brand mb-0 h1 mx-4">Eduardo Viega</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end mx-4" id="navbarSupportedContent">
            <v-spacer />
            
            <ul class="navbar-nav mr-0">
                <li class="nav-item active">
                    <a class="nav-link active" href="home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="aboutme.html">Sobre mim</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="experience.html">Experiências</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="projects.html">Projetos</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
// import Cart from 'vue-material-design-icons/Cart.vue';
// import Menu from 'vue-material-design-icons/Menu.vue';
export default {
    // components: { Cart, Menu },
}
</script>

<style>
    /* .departamentos * {
        background-color: white !important;
        text-decoration: none;
        color: black;
        width: 100%;
    }
    .departamentos div:first-child:hover {
        transition: all .5s;
        background-color: #008ad8 !important;
        color: white;
        transform: scale(1.03);
    }
    .departamentos {
        display: flex;
        flex-direction: column;
        max-height: 90vh;
        padding: 0;
    }
    .carrinho {
        color: white;
        background: transparent !important;
        display: flex; 
        align-items: center; 
        padding-top: 5px; 
        text-decoration: none;
    }
    .carrinho:hover, .menu {
        transform: scale(1.2);
    }
    .menu:hover {
        transform: scale(1.5);
    }
    .toolbar * {
        transition: all .5s;
        background-color: #008ad8;
    } */
</style>