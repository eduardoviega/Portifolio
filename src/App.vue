<template>
  <v-app>
    <Header style="position: sticky; top: 0; z-index: 1;"></Header>
    <v-content style="background: #232526;">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: { Header },
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
