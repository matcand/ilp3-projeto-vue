export default function Aluno({ nome, curso }) {
  return (
    <p style={{ fontWeight: 'bold', color: '#1976d2' }}>
      Aluno: {nome} — Curso: {curso}
    </p>
  )
}