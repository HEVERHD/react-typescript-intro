import { useState  }from "react"
export const Contador = () => {

    const [valor, setvalor] = useState(10)

    const acomular = (numero : number) => {
        setvalor(valor + numero)

    } 


  return (
    <>
    <h3> Contador <small>{valor}</small></h3>

    <button 
    onClick={() => acomular(1)}
    className="btn btn-primary"
    >
        +1
    </button>
&nbsp;
    <button
     onClick={() => acomular(-1)}
     className="btn btn-secondary">
        -1
    </button>
   </>
  )
}
