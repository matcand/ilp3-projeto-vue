<template>
  <table class="table">
    <thead><tr><th>Nome</th><th>E-mail</th><th>Ações</th></tr></thead>
    <tbody>
    <tr v-for="u in usuarios" :key="u.id">
      <td>{{ u.name }}</td>
      <td>{{ u.email }}</td>
      <td>
        <router-link :to="`/usuarios/${u.id}`" class="btn-link">Ver</router-link>
        <button @click="$emit('editar', u)" class="btn-edit">Editar</button>
        <button @click="$emit('remover', u.id)" class="btn-del">Excluir</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: { usuarios: { type: Array, required: true } }
}
</script>
<style scoped>
.table { width: 100%; border-collapse: collapse; margin-top: 10px; }
th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
button, .btn-link { margin-right: 5px; cursor: pointer; padding: 4px 8px; text-decoration: none; font-size: 12px; border-radius: 4px; border: none;}
.btn-edit { background: #ff9800; color: white; }
.btn-del { background: #f44336; color: white; }
.btn-link { background: #2196f3; color: white; }
</style>