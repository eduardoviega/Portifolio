<template>
    <v-img class="gif-fundo" height="100%" src="https://user-images.githubusercontent.com/62398226/166610737-f3db3c82-d86c-40be-b367-35501952f3c8.gif">
        <div class="conteudo">
            <img class="perfil" src="./img/perfil.jpg">
            <section>
                <h1>Eduardo Viega</h1>
                <h5>Engenheiro de Software, Programador & Técnico de Informática</h5>
                <div class="icons">
                    <a target="_blank" href="https://www.github.com/eduardoviega/"><img src="./img/github.png"></a>
                    <a target="_blank" href="https://www.linkedin.com/in/eduardoviega/"><img src="./img/linkedin.png"></a>
                    <a target="_blank" href="https://www.instagram.com/eduardooviega/"><img src="./img/instagram.png"></a>
                    <a target="_blank" href="mailto:eduardoviega12@gmail.com"><img src="./img/gmail.png"></a>
                </div>
            </section>
        </div>
        <Footer></Footer>
    </v-img>
</template>

<script>
import Footer from '../Footer.vue'
export default {
    components: { Footer }
}
</script>

<style scoped>
section {
    padding: 5px;
    border-radius: 10px;
    background-color: #0009;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 25px;
}
h5 {
    max-width: 400px;
}
h1 {
    margin-top: 5px;
    font-weight: bold;
}
.conteudo {
    display: flex;
    background-color: #0005;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.perfil{
    width: 15vw;
    min-width: 200px;
    border-radius: 50%;
}
.icons img {
    margin: 5px;
    width: 6vh;
    height: 6vh;
}
.icons img:hover {
    transform: scale(1.15);
    transition: transform .5s;
}
</style>