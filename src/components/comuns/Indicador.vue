<template>
        <div :class="estilo">
            <p>{{ titulo }}</p>
            <h2>{{ indicador }}</h2>
        </div>
</template>

<script>
export default {
    name: 'IndicadorDeVagas',
    props: ['titulo', 'indicador', 'bg', 'color'],
    /*
    data: () => ({
        titulo: '',
        indicador: ''
    })
    */
   computed: {
    estilo() {
        return `h-100 p-5 rounder-3 border ${this.bg} ${this.color}`
    }
   }
}

</script>