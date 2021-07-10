import React, { useState } from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0);
    function aumentar() {
        setContador(contador + 1);
    }
    function diminuir() {
        setContador(contador > 0 ? contador - 1 : 0);
    }
    return (
        <>
            <div>{contador}</div>
            <button onClick={aumentar}>Aumentar</button>
            <button onClick={diminuir}>Diminuir</button>
        </>
    )
}
