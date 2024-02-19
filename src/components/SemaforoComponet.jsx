import { useState } from "react";

function Semaforo() {
  const [semaforo, setSemaforo] = useState(false);

  const alternarSemaforo = () => {
    setSemaforo(!semaforo);
  };

  return (
    <>
      <h4>Semaforo {semaforo ? "Encendido" : "Apagado"}</h4>
      <button onClick={alternarSemaforo}>Alternar</button>
    </>
  );
}

export default Semaforo;
