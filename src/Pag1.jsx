import "./App.css";
import { Contexto } from "./contexto/Contexto";
import React , { useContext } from 'react';

function Pag1() {
  const { color } = useContext(Contexto);

  return (
    <div className="hijo" style={{background:color}}>
      Pagina 1
    </div>
  );
}

export default Pag1;
