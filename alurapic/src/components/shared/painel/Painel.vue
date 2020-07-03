<template>
    <div class="painel">
        <h2 class="painel-titulo" @dblclick="visivel = !visivel">{{ titulo }}
        </h2>
        <transition name="painel-fade">
            <div class="painel-conteudo" v-show="visivel">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {

    props: ['titulo'],

    data() {
        return {
            visivel: true
        }
    }

}

</script>

<style scoped>

/* estilo do painel */ 

   .painel {
    border-radius: 3px;
    display: inline-block;
    margin: .3em;
    box-shadow: 2px 2px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
    background: gainsboro;
  }

  .painel .painel-titulo {
    border-bottom: solid 1px grey;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    text-align: center;
    font-size: .8em;
    background:gainsboro;
    margin: 0;
    padding: 10px;
    text-transform: uppercase;
  }

.painel-fade-enter,
.painel-fade-leave-active {

    opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
    transition: opacity 500ms;

}


</style>