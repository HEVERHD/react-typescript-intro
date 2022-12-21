

const TiposBasicos = () => {
    const nombre: string = "Hevert";
    const edad: number = 30;
    const estaActivo: boolean = true;

    const poderes:string[] = []; //"Velocidad","Volar","Respirar bajo el agua"


  return (
    <>
        <h3> Tipos basicos</h3>
        {nombre}, {edad}, {(estaActivo) ? "activo" : "no activo"}
        <br />
        {poderes.join(", ")}
    </>
  )
}

export default TiposBasicos