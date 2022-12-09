<template>
    <div class="geral">
        <section class="sobre">
            <h1>Sobre <span>mim</span></h1>
            <h5>Trabalho como Desenvolvedor FullStack na Leigado, no momento estou cursando Engenharia de Software na UTFPR-DV e sou Técnico em Informática para a Internet pelo IFSC.</h5>
            <h5>Tenho conhecimento sobre as linguagens HTML, CSS, JavaScript, Dart, Java, C, os frameworks NodeJs, VueJs e Flutter, com prototipação pelo Figma e possuo um nível avançado de Inglês. Em meu tempo livre gosto de aprender coisas novas e trabalhar em meus projetos pessoais.</h5>
        </section>
        <section class="experiencias">
            <div class="estudos">
                <h1><span>Educação</span></h1>
                <section class="elementos">
                    <div class="elemento">
                        <h5>UTFPR - Universidade Tecnológica Federal do Paraná</h5>
                        <span>Bacharelado em Engenharia de Software</span>
                        <p>Jul, 2021 - Atualmente</p>
                    </div>
                    <div class="elemento">
                        <h5>IFSC - Instituto Federal de Educação, Ciência e Tecnologia de Santa Catarina</h5>
                        <span>Técnico em Informática para a Internet</span>
                        <p>Fev, 2019 - Jul, 2022</p>
                    </div>
                    <div class="elemento">
                        <h5>Clic Saber Cursos</h5>
                        <span>Curso de Inglês - Prime ao Avançado</span>
                        <p>Fev, 2018 - Jul, 2022</p>
                    </div>
                </section>
            </div>
            <div class="empregos">
                <h1><span>Empregos</span></h1>
                <section class="elementos">
                    <div class="elemento">
                        <h5>Leigado - Gestão para Gado Leiteiro e Gado de Corte</h5>
                        <span>Desenvolvedor FullStack</span>
                        <p>Dez, 2022 - Atualmente</p>
                    </div>
                    <div class="elemento">
                        <h5>Leigado - Gestão para Gado Leiteiro e Gado de Corte</h5>
                        <span>Analista de Testes de Software</span>
                        <p>Jan, 2022 - Nov, 2022</p>
                    </div>
                    <div class="elemento">
                        <h5>Tévere Industria e Comércio de Aço LTDA</h5>
                        <span>Menor Aprendiz no almoxarifado</span>
                        <p>Jul, 2021 - Dez, 2021</p>
                    </div>
                </section>
            </div>
        </section>
        <Footer class="rodape"></Footer>
    </div>
</template>

<script>
import Footer from '../Footer.vue'
export default {
    components: { Footer }
}
</script>

<style scoped>
.geral {
    display: flex;
    background-color: #0005;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 10vh 0;
}
h1 {
    font-weight: bold;
    color: #fff;
}
h1 span {
    color: #3dafd2;
}

.sobre, .experiencias {
    display: flex;
    color: white;
    background-color: #0009;
    border-radius: 10px;
    flex-wrap: wrap;
}
.sobre {
    padding: 5vh 5vw;
    flex-direction: column;
    align-items: center;
    margin: 0 10vw;
}
.sobre h5 {
    line-height: 25px;
}
.sobre h5:nth-child(2), .sobre :nth-child(1){
    margin-bottom: 3vh;
}
.experiencias {
    text-align: center;
    align-items: top;
    width: 80vw;
    padding: 5vh 5vw;
    margin: 10vh 10vw;
    gap: 2vh;
}
.estudos, .empregos {
    flex: 1;
}

.elementos {
    padding: 0 20px;
}
.elemento {
    text-align: start;
    margin-top: 2vh;
    border-left: 1px solid white;
    padding-left: 10px;
}
.elemento :nth-child(1) {
    margin-top: 5vh;
}

.elemento:hover {
    transform: scale(1.04);
    transition: transform .3s;
}

@media (max-width: 600px) {
    .sobre {
        padding: 5vh 10vw;
    }
}
</style>