import { useState } from 'react'
import Display from './Display'

export default function Counter() {
    const [contador, setContador] = useState(0)

    return (
        <section style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '15px' }}>
            <h3>Contador</h3>

            <Display valor={contador} />

            <button onClick={() => setContador(contador + 1)} style={{ marginRight: '5px' }}>
                +
            </button>

            <button onClick={() => setContador(contador - 1)}>
                -
            </button>
        </section>
    )
}