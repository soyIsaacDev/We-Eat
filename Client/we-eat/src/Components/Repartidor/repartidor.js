import React, { useEffect } from "react";

import { addRepartidor } from "../../Actions/APIMiddleware";

export default function Repartidor() {
 
  useEffect(() => {
    addRepartidor({ nombre:"Isaac Borbon", usuario:"iborbon", contraseña:"jivan", estatus:"Activo" });      
  }, []);
  
  return (
      <div>
        Nuevo Repartidor
      </div>
    
  );
}
