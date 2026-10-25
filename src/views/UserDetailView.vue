<template>
  <section class="card">
    <h2>Detalhes do Usuário</h2>
    <div v-if="usuario">
      <p><strong>ID:</strong> {{ usuario.id }}</p>
      <p><strong>Nome:</strong> {{ usuario.name }}</p>
      <p><strong>Email:</strong> {{ usuario.email }}</p>
    </div>
    <p v-else class="error">Usuário não encontrado.</p>
    <router-link to="/usuarios" class="btn-back">Voltar</router-link>
  </section>
</template>
<script>
import { useUserStore } from '../stores/userStore'
export default {
  props: ['id'],
  setup(props) {
    const store = useUserStore()
    return { usuario: store.porId(props.id) }
  }
}
</script>
<style scoped>
.card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; }
.btn-back { display: inline-block; margin-top: 15px; padding: 8px 12px; background: #eee; text-decoration: none; color: black; border-radius: 4px;}
.error { color: red; }
</style>