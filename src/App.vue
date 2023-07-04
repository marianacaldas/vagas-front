<template>
  <div>
    <VagasFavoritas />
    <Topo @navegar="componente = $event"/>
    <alerta v-if="exibirAlerta" :tipo="alerta.tipo">
      <template v-slot:titulo>
        <h5>{{ alerta.titulo }}</h5>
      </template>
      <p>{{ alerta.descricao }}</p>
    </alerta>
    <Conteudo v-if="visibilidade" :conteudo="componente"/>
  </div>
</template>

<script>
import Alerta from './components/comuns/Alerta.vue'
import Conteudo from './components/layouts/Conteudo.vue'
import Topo from './components/layouts/Topo.vue'
import VagasFavoritas from './components/comuns/VagasFavoritas.vue'

export default {
  name: 'App',
  components: {
    Conteudo,
    Topo,
    VagasFavoritas,
    Alerta
  },
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta: false,
    alerta: { titulo: '', descricao: '', tipo: '' }
  }),
  mounted() {
    this.emitter.on('alerta', (a) => {
      this.alerta = a
      this.exibirAlerta = true
      setTimeout(() => this.exibirAlerta = false, 4000)
    })
  }
}
</script>


