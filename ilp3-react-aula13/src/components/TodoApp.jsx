import { useState } from 'react'

export default function TodoApp() {
    // States do formulário controlado (Título + Prioridade do Desafio)
    const [titulo, setTitulo] = useState('')
    const [prioridade, setPrioridade] = useState('Média')

    // State da lista de tarefas
    const [tarefas, setTarefas] = useState([])

    /* ======================
       EVENTOS
       ====================== */

    function handleSubmit(e) {
        e.preventDefault() // evita reload da página

        if (!titulo.trim()) return

        const novaTarefa = {
            id: Date.now(),
            titulo,
            prioridade
        }

        // Atualização imutável da lista
        setTarefas([...tarefas, novaTarefa])

        // Limpa o campo de texto e reseta a prioridade
        setTitulo('')
        setPrioridade('Média')
    }

    function removerTarefa(id) {
        setTarefas(tarefas.filter(t => t.id !== id))
    }

    // DESAFIO: Limpar toda a lista
    function limparLista() {
        setTarefas([])
    }

    return (
        <section style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>To-Do List</h2>

            {/* FORMULÁRIO CONTROLADO */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <input
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Digite uma tarefa"
                    style={{ padding: '8px', flex: 1 }}
                />

                {/* DESAFIO 1: Campo de prioridade (Alta, Média, Baixa) */}
                <select
                    value={prioridade}
                    onChange={e => setPrioridade(e.target.value)}
                    style={{ padding: '8px' }}
                >
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                </select>

                {/* DESAFIO 4: Botão desabilitado se o input estiver vazio */}
                <button type="submit" disabled={!titulo.trim()} style={{ padding: '8px 16px' }}>
                    Adicionar
                </button>
            </form>

            {/* LISTA DINÂMICA COM MAP E KEY ÚNICA */}
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id} style={{ marginBottom: '10px' }}>
                        <strong>{tarefa.titulo}</strong> — Prioridade: <span>{tarefa.prioridade}</span>

                        <button
                            onClick={() => removerTarefa(tarefa.id)}
                            style={{ marginLeft: '10px' }}
                        >
                            Remover
                        </button>
                    </li>
                ))}
            </ul>

            {/* UI BASEADA NO STATE */}
            <p><strong>Total de tarefas:</strong> {tarefas.length}</p>

            {/* DESAFIO 3: Botão Limpar Lista */}
            {tarefas.length > 0 && (
                <button onClick={limparLista} style={{ marginTop: '10px' }}>
                    Limpar Lista
                </button>
            )}
        </section>
    )
}
