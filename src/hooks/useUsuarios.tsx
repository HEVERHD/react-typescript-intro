import { useEffect, useState, useRef } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes.interface';
import { reqResApi } from '../api/reqRes';


const useUsuarios = () => {


  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  const paginaRef = useRef(0)

  useEffect(() => {
      //llamado al API
      cargarUsuarios();

  }, [])

  const cargarUsuarios = async () => {

      const resp = await reqResApi.get<ReqResListado>('/users', {
          params:{
              page: paginaRef.current
          }
      })

      if ( resp.data.data.length > 0 ){
          setUsuarios(resp.data.data);
        
      } else {
          paginaRef.current -- ;
          alert("No hay mas pagina")
      }
   
  }

  const paginaSiguiente = () => {
    paginaRef.current ++ ;
    cargarUsuarios()
  }

  const paginaAnterior = () => {
    if (paginaRef.current > 1){
        paginaRef.current -- ;
        cargarUsuarios()

    }
    
  }


  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior

  }

  
}

export default useUsuarios