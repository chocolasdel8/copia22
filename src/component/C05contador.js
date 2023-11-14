import React, {useState, Fragment} from 'react';

const C05contador = () => {
    const [numero, setNumero] = useState(0);
    const aumentar = () =>{
        console.log("Hacer click");
        setNumero(numero+1);
    }
    return(
        <Fragment>
            <h3>Mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </Fragment>
    )
    
}

export default C05contador;