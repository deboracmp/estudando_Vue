<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Filtre pelo Título">
    <p class="informativo">{{ mensagem }}</p>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="(foto,ix) in fotosComFiltro" :key="ix">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
          <meu-botao 
          tipo="button" 
          rotulo="Remover" 
          @botaoAtivado="remove(foto)"
          :confirmacao="true"
          estilo="perigo"/>
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,
  },

  data () {

    return {

      titulo: "Alurapic",
      fotos: [],
      filtro: '',

    }
  },

  computed: {

    fotosComFiltro() {
      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      }else {
        return this.fotos;
      }
    },

    mensagem() {
      return `${this.filtro.length} caracteres digitados`;
    }

  },

  methods: {
    remove(foto) {
        alert("Remover a foto " + foto.titulo);
      }
  },


  created() {
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err))
  }
}

</script>

<style>


h1, h2 {
  font-weight: normal;

}

.centralizado {
  text-align: center;
}

.filtro {
  display: block;
  width: 90%;
  height: 2em;
  border-radius: 3px;
  border: solid .08em grey;
  background: gainsboro;
  margin: 0 auto;
  font-size: .6em;

}

.informativo {
  font-size: .6em;
  text-align: right;
  color: grey;
  margin: 1em 40px;

}

.lista-fotos {
  list-style: none;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2em;

}

.lista-fotos-item{
  margin: .5em .1em;
}

</style>