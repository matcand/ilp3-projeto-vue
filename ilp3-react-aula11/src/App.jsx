import Card from './components/Card'
import Aluno from './components/Aluno'

function App() {
  const curso = 'ILP3 — React.js'
  const aula = 11

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>{curso}</h1>
      <h2>Aula {aula} — Introdução ao React</h2>
      <p>Este é o primeiro componente React criado com Vite.</p>

      <hr />

      {/* Uso do componente Card */}
      <Card titulo="Virtual DOM" />
      <Card titulo="Componentes Funcionais" />
      <Card titulo="JSX" />

      <hr style={{ marginTop: '20px' }} />

      {/* RESOLUÇÃO DO DESAFIO: Renderizando 3 alunos diferentes */}
      <h2>Lista de Alunos (Desafio)</h2>
      <Aluno nome="Matheus Cândido (Macal)" curso="Informática para Negócios" />
      <Aluno nome="Lorena" curso="Gestão de Recursos Humanos" />
      <Aluno nome="Ulisses" curso="Informática para Negócios" />
    </main>
  )
}

export default App