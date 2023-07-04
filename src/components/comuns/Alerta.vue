<template>
    <div :class="estiloAlerta" role="alert">
        <slot name="titulo">
            <h3>Título da mensagem de feedback</h3>
        </slot>
        <hr>
        <slot><p>Mensagem de feedback</p></slot>
    </div>
</template>

<script>
export default {
    name: 'MensagemDeAlerta',
    props: { tipo: String },
    computed: {
        estiloAlerta() {
            switch(this.tipo) {
                case 'erro': return 'alert alert-danger'
                case 'sucesso': return 'alert alert-sucess'
                default: return 'alert alert-sucess'
            }
        }
    }
}
    
</script>
