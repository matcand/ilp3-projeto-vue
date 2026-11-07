export default function Card({ titulo }) {
  return (
    <section style={{ border: '1px solid #ddd', padding: '10px', marginTop: '10px' }}>
      <h3>{titulo}</h3>
      <p>Conteúdo renderizado dinamicamente com JSX.</p>
    </section>
  )
}