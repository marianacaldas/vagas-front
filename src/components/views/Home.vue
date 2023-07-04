<template>
    <div class="container py-4">
        <div class="row">
            <div class="col">
                <PesquisarVaga />
            </div>
        </div>

        <ListaVagas />
        
        <div class="row mt-5">
            <div class="col-4">
                <Indicador titulo="Vagas Abertas" indicador="100" bg="bg-dark" color="text-white"/>
            </div>
            <div class="col-4">
                <Indicador titulo="Profissionais Cadastrados" indicador="225" bg="bg-dark" color="text-white"/>
            </div>
            <div class="col-4">
                <Indicador titulo="Visitantes On-line " :indicador="usuariosOnline" bg="bg-light" color="text-dark"/>
            </div>
        </div>
    </div>
</template>

<script>
import ListaVagas from '../comuns/ListaVagas.vue'
import PesquisarVaga from '../comuns/PesquisarVaga.vue'
import Indicador from '../comuns/Indicador.vue'

export default {
    name: 'HomeView',
    components: {
        PesquisarVaga,
        Indicador,
        ListaVagas
    },
    data: () => ({
        usuariosOnline: 0,
    }),
    methods: {
        getUsuariosOnline() {
           this.usuariosOnline = Math.floor(Math.random() * 101) // entre 0 e 100
        }
    },
    created() {
        setInterval(this.getUsuariosOnline, 1000) // a cada 1 segundo
    }
}

</script>

<style scoped>

</style>