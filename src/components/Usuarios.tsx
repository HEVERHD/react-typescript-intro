
import {  Usuario } from '../interfaces/reqRes.interface';
import useUsuarios from '../hooks/useUsuarios';

const Usuarios = () => {

    const {usuarios, paginaSiguiente, paginaAnterior} =useUsuarios()

   

    const renderItem = ({ id, first_name, last_name, email, avatar }: Usuario ) => {

        return(
            <tr key={id.toString() }>
            <th> 
                <img 
                src={ avatar } 
                alt={ first_name }
                style={{
                    width:35,
                    borderRadius: 100
                }}
                 />    
             </th>
            <th> { first_name } {last_name } </th>
            <th> { email }  </th>
          
        </tr>
        )

    }

  return (
    <>
        <h3> Usuarios : </h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>  Avatar  </th>
                        <th>  Nombre  </th>
                        <th>  Email   </th>
                      
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button 
                 onClick={paginaSiguiente}
                className="btn btn-primary">
                     Siguientes
             </button>
            
            &nbsp;

             <button 
                 onClick={paginaAnterior}
                className="btn btn-danger">
                     Regresar
             </button>
    </>
  )
}

export default Usuarios