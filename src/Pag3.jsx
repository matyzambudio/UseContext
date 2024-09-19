import "./App.css";
import { Contexto } from "./contexto/Contexto";
import React , { useContext } from 'react';

function Pag3() {
  const { color } = useContext(Contexto);

  return (
    <div className="hijo" style={{background:color}}>
      Pagina 3
    
    </div>
  );
}

export default Pag3;