import React from "react";
import "../HojasEstilo/hojaEstilo-header.css";

// Ojo, los estilos deben ser un objetos JavaScript Linea 11

function Header(props) {
    return (
        <div className="header mt-0 mb-5">
            <div className="card text-black">
                <img
                    src={props.imagenSalento}
                    className="card-imagen"
                    style={{ maxWidth: "100%", height: "auto" }}
                    alt="imagen salento"
                />
                <div className="card-img-overlay w-auto px-5 py- 5 mx-5  my-5">
                    <h6 className="card-title fw-bold my-5" style={{ fontSize: '125px', fontWeight: "bold", fontFamily: "Amasis MT Pro Black",  }} >{props.titulo}</h6>
                    <p className="card-text fs-3 fw-semibold my-5 ">{props.texto}</p>
                    <a href="#" className="btn btn-primary btn-lg my-5">
                        {props.tituloBoton}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
