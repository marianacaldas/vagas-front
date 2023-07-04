<template>
    <div class="card">
        <div class="card-header bg-dark text-white">
            <div  class="row">
                <div class="col d-flex justify-content-between">
                    <div>
                        {{ titulo }}
                    </div>
                    <div>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" v-model="favoritada">
                            <label class="form-check-label">Favoritar</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        <div class="card-body">
            <p>{{ descricao }}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted">Salário: R$ {{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Data: {{ getPublicacao }}</small>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'VagaDisponivel',
    data: () => ({
        favoritada: false
    }),
    watch: {
        favoritada(valorNovo) {
            if(valorNovo) {
                this.emitterr.emit('favoritarVaga', this.titulo)
            } else {
                this.emitterr.emit('desfavoritarVaga', this.titulo)
            }
        }
    },
    //props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props: {
        titulo: {
            typeof: String,
            required: true
        },
        descricao: {
            typeof: String,
            required: true
        },
        salario: {
            typeof: [ Number, String ],
            required: true
        },
        modalidade: {
            typeof: String,
            required: true
           },
        tipo: {
            typeof: String,
            required: true
        },
        publicacao: {
            typeof: String,
            required: true
        }
    },
    computed: {
        getModalidade() {
            switch(this.modalidade) {
                case '1': return 'Home Office'
                case '2': return 'Presencial'
            }
            return ''

        },
        getTipo() {
            switch(this.tipo) {
                case '1': return 'CLT'
                case '2': return 'PJ'
            }
            return ''
        },
        getPublicacao() {
            let dataPublicacao = new Date(this.publicacao)
            // return dataPublicacao.toLocaleString('pt-BR')
            //return dataPublicacao.toLocaleDateString('pt-BR')
        }
    },
    methods: {
    }
}
</script>