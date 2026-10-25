<template>
  <form @submit.prevent="salvar" class="form-box">
    <input v-model="form.name" placeholder="Nome" required />
    <input v-model="form.email" placeholder="Email" required />
    <button>Salvar</button>
  </form>
</template>
<script>
export default {
  props: { usuarioEdicao: Object },
  data() { return { form: { id: null, name: '', email: '' } } },
  watch: {
    usuarioEdicao: {
      immediate: true,
      handler(u) { if (u) this.form = { ...u } }
    }
  },
  methods: {
    salvar() {
      this.$emit('salvar', { ...this.form })
      this.form = { id: null, name: '', email: '' }
    }
  }
}
</script>
<style scoped>
.form-box { margin-bottom: 20px; display: flex; gap: 10px; }
input { padding: 8px; flex: 1; }
button { padding: 8px 16px; cursor: pointer; background: #4caf50; color: white; border: none; border-radius: 4px; }
</style>