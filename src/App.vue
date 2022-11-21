<template>
  <v-app id="home">
    <Header style="position: sticky; top: 0; z-index: 1;"></Header>
    <v-content style="background: #232526;">
      <v-container style="display: flex; justify-content: center; width: 100%;">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-content>
    <Footer style="padding: 20px 15%; display: flex; flex-wrap: wrap; align-items: center; 
      justify-content: space-between; gap: 2rem; background: #232526; background: linear-gradient(to left, #414345, #232526);"></Footer>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Header, Footer },
}
</script>

<style>
  * {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }

  @keyframes slide-in {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0px); opacity: 1; }
  }

  @keyframes slide-out {
    from { transform: translateY(0px); opacity: 1; }
    to { transform: translateY(-30px); opacity: 0; }
  }

  .slide-enter-active {
    animation: slide-in 0.4s ease;
  }

  .slide-leave-active {
    animation: slide-out 0.4s ease;
  }
</style>
