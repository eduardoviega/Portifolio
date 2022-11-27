<template>
    <div class="geral">
        <h1><span>Conhecimentos</span></h1>
        <section class="conhecimentos">
            <div class="icones">
                <h4>Linguagens:</h4>
                <img title="Dart 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg">
                <img title="Html 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg">
                <img title="Css 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg">
                <img title="JavaScript 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
                <img title="TypeScript 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg">
                <img title="Java 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg">
                <img title="C 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-line.svg">
                <img title="Python 👾" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg">
            </div>
            
            <div class="icones">
                <h4>Frameworks:</h4>
                <img title="Flutter 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"> 
                <img title="VueJs 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg">
                <img title="Vuetify 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg">
                <img title="NodeJs 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
                <img title="Bootstrap 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg">
            </div>
            
            <div class="icones">
                <h4>Ferramentas:</h4>
                <img title="VsCode 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <img title="Android Studio 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" />
                <img title="Postgres 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg">
                <img title="Figma 👾" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg">
                <img title="Postman 👾" src="https://user-images.githubusercontent.com/62398226/177898358-7d76dc0c-4e21-4d46-8c56-8b7bbd5d0035.png"> 
                <img title="Git 👾" src="https://camo.githubusercontent.com/b7ea09b0c030ae14623cfc3a52ab3ee0d07e0259a1b230139e65ba00454327c9/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f6769742d73636d2d69636f6e2e737667">
            </div>
        </section>

        <h1>Cursos<span> Realizados</span></h1>
        <section class="cursos">
            <div class="linha">
                <img src="./img/vueJs.png">
                <div class="fundo">
                    <h5>Desenvolvimento Web com Vue JS</h5>
                    <a href="https://www.udemy.com/course/vue-js-completo/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/flutter.png">
                <div class="fundo">
                    <h5>Desenvolvimento Mobile Flutter</h5>
                    <a href="https://www.udemy.com/course/flutter-bootcamp-with-dart/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/javaScript30.png">
                <div class="fundo">
                    <h5> Curso JavaScript 30</h5>
                    <a href="https://javascript30.com/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/javaScriptBasico.png">
                <div class="fundo">
                    <h5>Curso Básico de JavaScript</h5>
                    <a href="https://www.youtube.com/watch?v=i6Oi-YtXnAU&t=3s&ab_channel=DevAprender" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/figma.png">
                <div class="fundo">
                    <h5>Curso de Design com Figma</h5>
                    <a href="https://www.udemy.com/course/learn-how-to-design-a-website-in-figma/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
            
            <div class="linha">
                <img src="./img/bootcamp.png">
                <div class="fundo">
                    <h5>Bootcamp Impulso JavaScript Evolution</h5>
                    <a href="https://web.dio.me/track/impulso-javascript-evolution" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../Footer.vue'

export default {
    components: { Footer },
    mounted(){
        let elementos = document.getElementsByClassName("fundo")
        for(let i=0; i<elementos.length; i++){
            elementos[i].style.background="linear-gradient(to top, #3dafd2ff, #1115)"
        }
    }
}
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    list-style: none;
    scroll-behavior: smooth;
    transition: transform 0.5s;
}
section {
    max-width: 80vw;
    gap: 40px;
    margin-bottom: 30px;
}
.geral {
    display: flex;
    background-color: #0005;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 10vh;
}
span{
    color: #3dafd2;
}
h1 {
    font-weight: bold;
    color: #fff;
    padding: 5vh 0;
}
h4 {
    font-weight: bold;
    color: #fff;
    padding: 2vh 0;
}
.conhecimentos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.icones {
    text-align: center;
}
.icones img {
    padding: 5px;
    height: 8vh;
    margin: 0 5px;
}
.cursos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.linha{
    min-width: 290px;
    width: 25vw;
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 20px;
}
.linha img{
    width: 100%;
    border-radius: 8px;
    display: block;
}
.linha:hover {
    transform: scale(1.1);
}
.linha:hover .fundo{
    height: 100%;
}
.fundo{
    width: 100%;
    height: 0;
    position: absolute;
    border-radius: 8px;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0 40px;
    transition: height 0.5s;
    gap: 10%;
}
.fundo h5{
    font-size: x-large;
    font-weight: bold;
    color: #fff;
}
.fundo i{
    color: #3dafd2;
    font-size: 18px;
    background: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

@media (max-width: 1200px) {
    .fundo h5{
        font-size: large;
    }
    .fundo i {
        width: 30px;
        height: 30px;
    }
}
</style>