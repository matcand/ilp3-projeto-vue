import Counter from './components/Counter'
import UserList from './components/UserList'
import ProdutoList from './components/ProdutoList'

function App() {
  return (
      <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'left' }}>
        <h1>ILP3 — React Aula 12</h1>

        <Counter />
        <UserList />
        <ProdutoList />
      </main>
  )
}

export default App