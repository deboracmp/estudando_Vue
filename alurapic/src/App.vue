
<template>
  <div class="corpo">

    <meu-menu :rotas="routes"/>
    <transition name="pagina">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {
    return {

      routes

    }
  }

}

</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}

.corpo {
  width: 90%;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}


.pagina-enter,
.pagina-leave-active {

    opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
    transition: opacity 500ms;

}



</style>