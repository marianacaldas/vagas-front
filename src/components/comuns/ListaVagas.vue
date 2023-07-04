<template>
    <div class="row mt-5" v-for="(vaga, index) in vagas" :key="index">
        <div class="col">
            <vaga v-bind="vaga"/>
        </div>
    </div>
</template>

<script>
import Vaga from '../comuns/Vaga.vue'

export default {
    name: 'ListaDeVagas',
    data: () => ({
        vagas: []
    }),
    components: {
        Vaga
    },
    activated() { // recupera os dados armazenados no localStorage e mostra no site
        this.vagas = JSON.parse(localStorage.getItem('vagas'))
    },
    mounted() {
        this.emitter.on('filtrarVagas', vaga => {
            const vagas = JSON.parse(localStorage.getItem('vagas'))
            this.vagas = vagas.filter(reg => reg.titulo.toLowerCase().includes(vaga.titulo.toLowerCase())) // true ou false: O método filter cria um novo array com todos os elementos que passaran no teste implementado na função

            
        })
    }
    
}
</script>