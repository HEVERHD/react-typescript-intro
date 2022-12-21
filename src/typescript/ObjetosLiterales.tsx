
interface Persona {
    nombreCompleto : string,
    edad: number,
    direccion : Direccion

}

interface Direccion {

    pais: string,
    casaNo: number

}





export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: "Hevert",
        edad : 31,
        direccion:{
            pais: "colombia",
            casaNo: 3040
        }
    }


  return (
    <>
        <h3> Objetos literales </h3>
        <code>
            {JSON.stringify(persona, null, 2)}
        </code>
    </>
  )
}
