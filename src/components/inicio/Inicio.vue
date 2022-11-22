<template>
    <v-img class="gif-fundo" height="100%" src="https://user-images.githubusercontent.com/62398226/166610737-f3db3c82-d86c-40be-b367-35501952f3c8.gif">
        <div class="conteudo">
            <img class="perfil" src="./img/perfil.jpg">
            <section>
                <h1>Eduardo Viega</h1>
                <h3>Técnico de Informática, Engenheiro de Software & Programador</h3>
                <div class="icons">
                    <a href="https://www.github.com/eduardoviega/"><img src="./img/github.png"></a>
                    <a href="https://www.linkedin.com/in/eduardoviega/"><img src="./img/linkedin.png"></a>
                    <a href="https://www.instagram.com/eduardooviega/"><img src="./img/instagram.png"></a>
                    <a href="mailto:eduardoviega12@gmail.com"><img src="./img/gmail.png"></a>
                </div>
            </section>
        </div>
    </v-img>
</template>

<script>
export default {

}
</script>

<style scoped>
section {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 25px;
}
h3 {
    max-width: 450px;
}
h1 {
    font-size: xxx-large;
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
    width: 20vw;
    min-width: 250px;
    border-radius: 50%;
}
.icons img {
    margin: 5px;
    width: 6vh;
    height: 6vh;
}
</style>