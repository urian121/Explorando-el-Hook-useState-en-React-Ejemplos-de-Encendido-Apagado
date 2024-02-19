import { useState } from "react";

function Coche() {
  const [statusCar, setStatusCar] = useState(false);

  const toggleCarStatus = () => {
    //setStatusCar(!statusCar);
    setStatusCar((prevStatus) => !prevStatus);
  };

  return (
    <div>
      El coche está: <strong>{statusCar ? "Encendido" : "Apagado"}</strong>
      <br />
      <br />
      <button onClick={toggleCarStatus}>Cambiar Estado</button>
    </div>
  );
}

export default Coche;
