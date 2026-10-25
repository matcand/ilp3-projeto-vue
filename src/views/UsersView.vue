<template>
  <section>
    <h2>Gerenciamento de Usuários</h2>
    <p>Total cadastrado: <strong>{{ store.total }}</strong></p>

    <UserForm :usuario-edicao="usuarioEdicao" @salvar="salvar" />
    <UserTable :usuarios="store.usuarios" @editar="editar" @remover="store.remover" />
  </section>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import UserForm from '../components/UserForm.vue'
import UserTable from '../components/UserTable.vue'

export default {
  components: { UserForm, UserTable },
  setup() {
    const store = useUserStore()
    if (store.usuarios.length === 0) store.carregar()

    // Retorna apenas a store no setup
    return { store }
  },
  data() {
    return {
      // Colocando aqui, o Vue passa a vigiar a variável e a tela reage
      usuarioEdicao: null
    }
  },
  methods: {
    salvar(usuario) {
      usuario.id ? this.store.atualizar(usuario) : this.store.adicionar(usuario)
      this.usuarioEdicao = null
    },
    editar(usuario) {
      this.usuarioEdicao = { ...usuario }
    }
  }
}
</script>