import React from "react";


function Barra(props) {
    return (
        <div className="contenedor-testimonio">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.marca}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">{props.item1}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.item2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.item3}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">{props.item4}</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>


        </div>

    );
}
export default Barra;