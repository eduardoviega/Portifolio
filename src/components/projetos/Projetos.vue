<template>
    <div class="geral">
        <h1>Meus <span>Projetos</span></h1>
        <section class="projetos">
            <div class="linha">
                <img src="./img/LeigadoShop.png">
                <div class="fundo-projeto">
                    <h5>Leigado Shop</h5>
                    <p>Projeto feito para se candidatar para uma vaga de desenvolvedor</p>
                    <a href="https://eduardoviega.github.io/ECommerce-VueJs/" style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/JavaScript30.png">
                <div class="fundo-projeto">
                    <h5>JavaScript 30</h5>
                    <p>Curso com 30 dias de desafios de código</p>
                    <a href="https://eduardoviega.github.io/JavaScript30/" style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/Supreme.png">
                <div class="fundo-projeto">
                    <h5>Supreme</h5>
                    <p>Projeto pessoal para praticar HTML, CSS e JavaScript</p>
                    <a href="https://eduardoviega.github.io/Supreme/" style="text-decoration: none;">
                        <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            <div class="linha">
                <img src="./img/FormandoConjuntos.png">
                <div class="fundo-projeto">
                    <h5>Formando Conjuntos</h5>
                    <p>Jogo de cartas</p>
                    <a href="https://eduardoviega.github.io/FormandoConjuntos/" style="text-decoration: none;">
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
        elementos[0].style.background="#3dafd288"
        elementos[1].style.background="#3dafd288"
        elementos[2].style.background="#3dafd288"
        elementos[3].style.background="#3dafd288"
        // elementos[4].style.background="#3dafd288"
        // elementos[5].style.background="#3dafd288"
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
    max-width: 900px;
    gap: 50px;
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
.projetos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.linha{
    width: 300px;
    height: auto;
	position: relative;
	overflow: hidden;
	border-radius: 8px;
	cursor: pointer;
}
.linha img{
	width: 100%;
	border-radius: 8px;
	display: block;
	/* transition: transform 0.5s; */
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
	font-size: 20px;
	font-weight: bold;
    color: #fff;
}
.fundo-projeto p{
    /* color: #000; */
    color: #fff;
	font-size: 1rem;
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
/* .linha:hover img{
	transform: scale(1.1);
} */
.linha:hover {
	transform: scale(1.1);
}
.linha:hover .fundo-projeto{
	height: 100%;
}
</style>