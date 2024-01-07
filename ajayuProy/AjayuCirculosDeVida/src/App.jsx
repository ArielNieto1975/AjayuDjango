import { useState } from "react";
import Header from "./components/Header";
import { Body } from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";

function App(props){

  const accesos = ["Home", "Atrapas", "Frascos", "Diseño"];
  const [principal, setPrincipal] = useState(true);
  const [atrapaPage, setAtrapaPage] = useState(false);
  const [frascosPage, setFrascosPage] = useState(false);
  const [disenhosPage, setDisenhosPage] = useState(false);

  const mostrarPrincipal = () => {
    console.log(principal);
    setPrincipal(true);
    setAtrapaPage(false);
    setFrascosPage(false);
    setDisenhosPage(false);
  };
  const mostrarAtrapa = () => {
    console.log(atrapaPage);
    setAtrapaPage(true);
    setPrincipal(false);
    setFrascosPage(false);
    setDisenhosPage(false);
  };
  const mostrarFrascos = () => {
    console.log(frascosPage);
    setFrascosPage(true);
    setAtrapaPage(false);
    setPrincipal(false);
    setDisenhosPage(false);
  };
  const mostrarDisenhos = () => {
    console.log(disenhosPage);
    setDisenhosPage(true);
    setFrascosPage(false);
    setAtrapaPage(false);
    setPrincipal(false);
  };

  return (
    <div className="App">
      <Header
        mostrarPrincipal={mostrarPrincipal}
        mostrarAtrapa={mostrarAtrapa}
        mostrarFrascos={mostrarFrascos}
        mostrarDisenhos={mostrarDisenhos}
        accesos={accesos}
      />
      <Body
        principal={principal}
        atrapaPage={atrapaPage}
        frascosPage={frascosPage}
        disenhosPage={disenhosPage}
        accesos={accesos}
      />
      <Footer/>
    </div>
  )
}

export default App
