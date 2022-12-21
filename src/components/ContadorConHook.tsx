import useCounter from '../hooks/useCounter';



export const ContadorConHook = () => {

  const {valor, acomular} = useCounter(100);


  return (
    <>
    <h3> Contador con hook <small>{valor}</small></h3>

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
