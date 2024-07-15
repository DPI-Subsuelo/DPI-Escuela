// import { children } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logo from "../images/Logo.png";
const PortalLayout = ({ children }) => {
    const usuario = useSelector((state) => state.persona.usuario);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
                    <div className="container-fluid">
                        <NavLink to="/"><img src={Logo} alt="" width="30" height="24" /></NavLink>
                        {/* <a class="navbar-brand" href="/">
                            <img src={Logo} alt="" width="30" height="24" />
                        </a> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDarkDropdown"
                            aria-controls="navbarNavDarkDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* PRIMER BOTON */}
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-dark dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Reportes
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><NavLink to="/Reportes" className="dropdown-item " >Reportes</NavLink></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink to="/ListadoUsuarios" className="dropdown-item " >Usuarios</NavLink></li>
                                        </ul>
                                    </div>
                                </li>
                                {/* FIN PRIMER BOTON */}
                                {/* SEGUNDO BOTON */}
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Auditorias
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li><NavLink to="/ConsultasAbiertas" className="dropdown-item " >Consultas Abiertas</NavLink></li>
                                            <li><NavLink to="/ConsultasCerradas" className="dropdown-item " >Consultas Cerradas</NavLink></li>
                                            <li><NavLink to="/Colectivo" className="dropdown-item " >Movilidades</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><NavLink to="/Edificios" className="dropdown-item " >Edificios</NavLink></li>
                                            <li><NavLink to="/Limpieza" className="dropdown-item " >Limpieza</NavLink></li>
                                            <li><NavLink to="/MaquinaAux" className="dropdown-item " >Maquina Auxiliar</NavLink></li>
                                            <li><hr className="dropdown-divider" /></li>
                                        </ul>
                                    </div>
                                </li>
                                {/* FIN SEGUNDO BOTON */}
                            </ul>
                        </div>
                        {/* TERCER BOTÓN  DERECHA */}
                        <div className="btn-group btn-sm">
                            <p className='text-white px-2' >
                                {usuario.empresa}
                            </p>

                            <p className='text-white '>
                                <a href="/">{usuario.login} </a>
                            </p>
                        </div>
                        {/* FIN BOTON DERECHA */}
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default PortalLayout