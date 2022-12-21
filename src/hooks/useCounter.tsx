import {useState} from 'react'

const useCounter = (inicial : number = 10) => {

    const [valor, setvalor] = useState(inicial)

    const acomular = (numero : number) => {
        setvalor(valor + numero)

    } 

    return {
        valor,
        acomular
    }
 
}

export default useCounter