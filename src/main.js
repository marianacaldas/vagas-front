import { createApp } from 'vue'
import App from './App.vue' 

// importar o pacote mitt
import mitt from 'mitt'

// criar a instância do pacote
const emitter = mitt()

// iniciar a instância do vue com base no componente app
// createApp(App).mount('#app')
const app = createApp(App)

// configurar a instância do pacote mitt como sendo uma propriedade global
// essa propriedade global estará disponível para todas as instâncias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar a instância do vue com o elemento html de id app
app.mount('#app')
