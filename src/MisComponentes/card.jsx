import React from "react";
import "../HojasEstilo/hojaEstilo-Card.css";



function card(props) {
    return (
        <div className="d-flex flex row">
            <div className="col">
                <div className="card">
                    <img src={props.image} className="card-img-top" alt="imagen carta" />
                    <div className="card-body">
                        <h5 className="card-title">{props.titulo}</h5>
                        <p className="card-text">{props.texto}</p>
                    </div>
                    <div className="card-bottom">
                        <a href="#" className="btn btn-primary">{props.nombreBoton}</a>
                    </div>
                </div>

            </div>

        </div>



    );
}
export default card;