<template>
    <div class="geral">
        <h1>Meus <span>Projetos Web</span></h1>
        <section class="projetos-web">
            <div class="linha">
                <img src="./img/LeigadoShop.png">
                <div class="fundo-projeto">
                    <h5>Leigado Shop</h5>
                    <p>Projeto feito para se candidatar para uma vaga de desenvolvedor</p>
                    <a href="https://eduardoviega.github.io/ECommerce-VueJs/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/JavaScript30.png">
                <div class="fundo-projeto">
                    <h5>JavaScript 30</h5>
                    <p>Curso com 30 dias de desafios de código</p>
                    <a href="https://eduardoviega.github.io/JavaScript30/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/Supreme.png">
                <div class="fundo-projeto">
                    <h5>Supreme</h5>
                    <p>Projeto pessoal para praticar HTML, CSS e JavaScript</p>
                    <a href="https://eduardoviega.github.io/Supreme/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
            
            <div class="linha">
                <img src="./img/SegurancaWeb.png">
                <div class="fundo-projeto">
                    <h5>Segurança Web</h5>
                    <p>Back-End com NodeJS, autenticação e segurança</p>
                    <a href="https://github.com/eduardoviega/SegurancaWeb" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/FormandoConjuntos.png">
                <div class="fundo-projeto">
                    <h5>Formando Conjuntos</h5>
                    <p>Jogo de cartas, Jogador vs Máquina</p>
                    <a href="https://eduardoviega.github.io/FormandoConjuntos/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
        </section>
        <h1>Meus <span>Projetos Mobile</span></h1>
        <section class="projetos-mobile">
            <div class="linha-mobile">
                <img src="./img/BMICalculator.png">
                <div class="fundo-projeto">
                    <h5>BMI Calculator</h5>
                    <p>Calculadora de IMC</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha-mobile">
                <img src="./img/Destini.png">
                <div class="fundo-projeto">
                    <h5>Destini</h5>
                    <p>Jogo com hitória interativa</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha-mobile">
                <img src="./img/Dice.png">
                <div class="fundo-projeto">
                    <h5>Dice</h5>
                    <p>Dados que sorteiam aleatoriamente ao clicar</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>
            
            <div class="linha-mobile">
                <img src="./img/Magic8Ball.png">
                <div class="fundo-projeto">
                    <h5>Magic 8 Ball</h5>
                    <p>Faça uma pergunta e veja a resposta</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha-mobile">
                <img src="./img/MyCard.png">
                <div class="fundo-projeto">
                    <h5>My Card</h5>
                    <p>Card com algumas informaçõoes minhas</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha-mobile">
                <img src="./img/Quizzler.png">
                <div class="fundo-projeto">
                    <h5>Quizzler</h5>
                    <p>Quiz com perguntas de verdadeiro ou falso</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
                        style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha-mobile">
                <img src="./img/Xylophone.png">
                <div class="fundo-projeto">
                    <h5>Xilofone</h5>
                    <p>App que simula um xilofone</p>
                    <a href="https://github.com/eduardoviega/FlutterCourse/" target="_blank"
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
        let elementos = document.getElementsByClassName("fundo-projeto")
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
    margin-bottom: 50px;
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
.projetos-web {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}
.projetos-mobile {
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
.linha:hover .fundo-projeto{
    height: 100%;
}
.linha-mobile{
    min-width: 200px;
    width: 12vw;
    height: auto;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    cursor: pointer;
    margin: 0 20px;
}
.linha-mobile img{
    width: 100%;
    border-radius: 8px;
    display: block;
}
.linha-mobile:hover {
    transform: scale(1.1);
}
.linha-mobile:hover .fundo-projeto{
    height: 100%;
}
.fundo-projeto{
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
    gap: 10px;
}
.fundo-projeto h5{
    font-size: x-large;
    font-weight: bold;
    color: #fff;
}
.fundo-projeto p{
    color: #fff;
    font-size: medium;
    line-height: 18px;
}
.fundo-projeto i{
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
    .fundo-projeto h5{
        font-size: large;
    }
    .fundo-projeto p{
        font-size: small;
    }
    .fundo-projeto {
        gap: 5px;
    }
    .fundo-projeto i {
        width: 30px;
        height: 30px;
    }
}
</style>