import "./App.css";
import Pag1 from "./Pag1";
import Pag2 from "./Pag2";
import Pag3 from "./Pag3";
import Colores from "./Colores";
import {Datos} from './contexto/Contexto'

const App = () => {
  return (
    <>
    <Datos>
      <div className="App">
        <Pag1 />
        <Pag2 />
        <Pag3 />
      </div>
      <Colores />
    </Datos>
  </>
  );
};

export default App;
