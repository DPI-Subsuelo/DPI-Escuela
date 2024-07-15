import { children } from 'react';
import { NavLink } from 'react-router-dom';

const DefaultLayout = ({ children }) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li >
                                <NavLink to="/" className="nav-item text-decoration-none px-2">Login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signup"  className="nav-item text-decoration-none px-2">Signup</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <main>{children}</main>
        </>
    )
}

export default DefaultLayout