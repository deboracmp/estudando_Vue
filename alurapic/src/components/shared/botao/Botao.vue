<template>

    <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>

</template>

<script>

export default {

    props: {
        tipo: {
            required: true,
            type: String
        },

        rotulo: {
            required: true,
            type: String
        },

        confirmacao: Boolean,
        estilo: String

    },
    
    methods: {
        
        disparaAcao() {

            if(this.confirmacao) {
                if(confirm('Confirma operação?')){
                    this.$emit('botaoAtivado');
                }
                return;       
            }
            this.$emit('botaoAtivado');
        },

    },

    computed: {
        estiloDoBotao() {
            if(this.estilo == 'padrao' || !this.estilo) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
        }
    }
}

</script>

<style scoped>

.botao {
    display: inline-block;
    padding: .5em;
    border: solid 1px whitesmoke;
    border-radius: 3px;
    margin: 5px;
    font-size: 0.7em;
}

.botao-padrao {
    background: rgb(19, 151, 151);
    color: whitesmoke;
}

.botao-perigo {
    background: lightcoral;
    color: whitesmoke;
}



</style>>