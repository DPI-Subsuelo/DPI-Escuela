
import DefaultLayout from '../layouts/DefaultLayout'
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { changeAuth } from "../store/appSlice";
import { useGetUsuariosQuery } from '../store/apiSlice';
import cargando from '../images/cargando.gif';

const Login = () => {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.persona.usuario);

  const { data: usrBase, isError, error, isLoading } = useGetUsuariosQuery();

  if (isLoading) return <div><img src={cargando} alt="Cargando"/></div>;
  else if (isError) return <div>Error: {error.message}</div>;

  const loginVacio = { 'login': '', 'clave': ''}

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    dispatch(changeAuth({ ...usuario, [name]: value }));

  };

  const chkLogin = (e) => { 
    e.preventDefault();
    const resultado = usrBase.find(item => (item.login === usuario.login) && (item.clave === usuario.clave) && (item.activo === true));
    if (!!resultado) {
      dispatch(changeAuth({'rol': resultado.rol}))
      dispatch(changeAuth({'empresa': resultado.empresa}))
      dispatch(changeAuth({'auth': true}))
      } else {
      dispatch(changeAuth(loginVacio));
    }
  }

  if (usuario.auth) {
    return <Navigate to="/AccesOk" />;
  } 
  return (
    <>
      <DefaultLayout>
        <div className="d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col">
              <div className="card mt-1">
                <div className="card-body">
                  <form onSubmit={chkLogin}>
                    <input
                      name="login"
                      value={usuario.login}
                      className="form-control mb-1"
                      type="text"
                      placeholder="Login"
                      onChange={manejarCambio}
                      required
                    />
                    <input
                      name="clave"
                      value={usuario.clave}
                      className="form-control mb-1"
                      type="password"
                      placeholder="Clave"
                      onChange={manejarCambio}
                      required
                    />
                    <div className="d-flex justify-content-center mt-3">
                      <button className="btn btn-success" >Ingresar</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </DefaultLayout>
    </>

  )
}

export default Login