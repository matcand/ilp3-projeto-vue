import { defineStore } from 'pinia'
import api from '../services/api'

export const useUserStore = defineStore('userStore', {
    state: () => ({ usuarios: [], loading: false, erro: '' }),

    getters: {
        total: (state) => state.usuarios.length,
        porId: (state) => (id) => state.usuarios.find(u => u.id === Number(id))
    },

    actions: {
        async carregar() {
            this.loading = true
            try {
                const res = await api.get('/users')
                this.usuarios = res.data
            } catch {
                this.erro = 'Erro ao carregar usuários'
            } finally {
                this.loading = false
            }
        },

        adicionar(usuario) {
            // Descobre o próximo ID sequencial
            // Se a lista tiver usuários, pega o maior ID e soma 1. Se estiver vazia, começa no 1.
            const novoId = this.usuarios.length > 0
                ? Math.max(...this.usuarios.map(u => u.id)) + 1
                : 1;

            // Salva o novo usuário com o ID calculado
            this.usuarios.push({ ...usuario, id: novoId })
        },

        atualizar(usuarioAtualizado) {
            const index = this.usuarios.findIndex(u => u.id === usuarioAtualizado.id)
            if (index !== -1) this.usuarios[index] = usuarioAtualizado
        },

        remover(id) {
            this.usuarios = this.usuarios.filter(u => u.id !== id)
        }
    }
})