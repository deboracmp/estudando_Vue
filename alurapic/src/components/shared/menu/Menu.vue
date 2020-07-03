<template>

    <nav>
      <ul class="menu">
        <li class="menu-item" v-for="rota in rotas">
          <router-link 
          :to= "rota.path ? rota.path : '/' " >{{ rota.titulo }}
          </router-link>
        </li>
      </ul>
    </nav>

</template>

<script>

export default {

    props: {
        
        rotas: {
            type: Array,
            required: true
        }
    }
    
}
</script>

<style scoped>

.menu {
  list-style: none;
  font-size: .7em;
  display: flex;
  justify-content: flex-end;
  margin: 0 40px;
    
}

.menu-item {
  padding: 0 10px;
}



</style>>