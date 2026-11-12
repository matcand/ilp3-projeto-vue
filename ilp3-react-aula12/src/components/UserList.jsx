import { useState } from 'react'

export default function UserList() {
    const [usuarios, setUsuarios] = useState([])

    function adicionar() {
        const novoUsuario = {
            id: Date.now(),
            nome: `Usuário ${usuarios.length + 1}`
        }

        // Cria nova lista mantendo a imutabilidade
        setUsuarios([...usuarios, novoUsuario])
    }

    return (
        <section style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
            <h3>Usuários</h3>

            <button onClick={adicionar}>
                Adicionar usuário
            </button>

            <ul>
                {usuarios.map(u => (
                    <li key={u.id}>
                        {u.nome}
                    </li>
                ))}
            </ul>
        </section>
    )
}