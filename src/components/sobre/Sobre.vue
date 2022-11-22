<template>
    <div class="geral">
        <section>
            <h1>Sobre</h1>
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
}
</style>