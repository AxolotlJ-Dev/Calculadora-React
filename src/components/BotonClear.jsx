import React from "react";

const BotonClear = (props) => {
  return (
    <div className="boton" onClick={props.manejarClic}>
      {props.children}
    </div>
  );
};

export default BotonClear;
