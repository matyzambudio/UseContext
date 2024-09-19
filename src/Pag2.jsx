import "./App.css";
import { Contexto } from "./contexto/Contexto";
import React , { useContext } from 'react';

function Pag2() {
  const { color } = useContext(Contexto);

  return (
    <div className="hijo" style={{background:color}}>
      Pagina 2
    
    </div>
  );
}

export default Pag2;