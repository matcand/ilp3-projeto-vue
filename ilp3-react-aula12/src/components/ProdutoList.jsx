import { useState } from 'react'

export default function ProdutoList() {
    const [produtos, setProdutos] = useState([])

    function adicionarProduto() {
        const precoGerado = (produtos.length + 1) * 25.5

        const novoProduto = {
            id: Date.now(),
            nome: `Produto ${produtos.length + 1}`,
            preco: precoGerado
        }

        setProdutos([...produtos, novoProduto])
    }

    // Cálculo da soma dos preços exigido no desafio
    const total = produtos.reduce((s, p) => s + p.preco, 0)

    return (
        <section style={{ border: '2px solid #1976d2', padding: '15px', borderRadius: '8px' }}>
            <h3>Lista de Produtos (Desafio)</h3>

            <button onClick={adicionarProduto}>
                Adicionar Produto
            </button>

            <p><strong>Total de produtos:</strong> {produtos.length}</p>
            <p><strong>Soma dos preços:</strong> R$ {total.toFixed(2)}</p>

            <ul>
                {produtos.map(p => (
                    <li key={p.id}>
                        {p.nome} — R$ {p.preco.toFixed(2)}
                    </li>
                ))}
            </ul>
        </section>
    )
}