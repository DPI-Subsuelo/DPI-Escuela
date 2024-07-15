import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  useGetPlanillasMensualesQuery,
  usePutPlanillaMensualesMutation
} from '../store/apiSlice';
import { cargarPlanilla, cargarSubdocumentoPlanilla } from '../store/appSlice';
import cargando from '../images/cargando.gif';
import { Modal, Button } from 'react-bootstrap';

const Planilla = () => {
  const dispatch = useDispatch();
  const [apiActualizarPlanilla] = usePutPlanillaMensualesMutation();
  const planillaMensual = useSelector((state) => state.novedad.planillaMensual);
  const { data, isError, error, isLoading, refetch } = useGetPlanillasMensualesQuery();

  useEffect(() => {
    const interval = setInterval(() => {
      refetch();
    }, 5000); // Refresca cada 5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [refetch]);

  const [showModal, setShowModal] = useState(false);

  if (isLoading) return <div><img src={cargando} /></div>;
  else if (data === 'X') return <div>Sin datos</div>
  else if (isError) return <div>Error: {error.message}</div>;

  const manejarCambio = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const nameParts = name.split('.');
    console.log('Desde manejar cambio: ', name, value, type, checked, nameParts)
    console.log('length: ', nameParts.length)
    if (nameParts.length === 3) {
      const [doc, subdoc, field] = nameParts;

      console.log(subdoc, ':', field, ':', newValue)
      dispatch(cargarSubdocumentoPlanilla({ subdoc, field, value: newValue }));
    } else {
      dispatch(cargarPlanilla({ [name]: newValue }));
    }
  };

  const handleRowClick = (dato) => {
    console.log('datos Modal: ', dato)
    dispatch(cargarPlanilla(dato)); // Cambiado aquí
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const actualizar = () => {
    setShowModal(false);
    console.log('actualizar: ', planillaMensual);
    try {
      dispatch(apiActualizarPlanilla(planillaMensual))
    } catch {
      console.error();
    }


  }

  return (
    <div className="container-fluid mt-5">
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th className='text-center'>Cargo Hs Cátedras</th>
              <th className='text-center'>Padron</th>
              <th className='text-center'>Nombre</th>
              <th className='text-center'>Apellido</th>
              <th className='text-center'>Espacio Curricular</th>
              <th className='text-center'>Fecha Nacido</th>
              <th className='text-center'>CUIL</th>
              <th className='text-center'>Alta</th>
              <th className='text-center'>Baja</th>
              <th className='text-center'>Días Oblig. Descontar</th>
              <th colspan="2" className='text-center'>Lic. con Goce Haberes</th>
              <th colspan="2" className='text-center'>Lic. sin Goce Haberes</th>
              <th className='text-center'>Baja Salario</th>
              <th className='text-center'>Observación</th>
            </tr>
            <tr>
              <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
              <th className='text-center'>Desde</th><th className='text-center'>Hasta</th>
              <th className='text-center'>Desde</th><th className='text-center'>Hasta</th><th></th><th></th>
            </tr>

          </thead>
          <tbody>
            {
              data.map((dato, idx) => (
                <tr key={idx} onClick={() => handleRowClick(dato)}>
                  <td>{dato.cargoHsCatedras}</td>
                  <td>{dato.padron}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.apellido}</td>
                  <td>{dato.espacio_curricular}</td>
                  <td>{dato.fecha_nacido}</td>
                  <td>{dato.cuil}</td>
                  <td>{dato.alta}</td>
                  <td>{dato.baja}</td>
                  <td>{dato.dias_oblig_descontar}</td>
                  <td>{dato.lic_con_goce_haberes.desde}</td>
                  <td>{dato.lic_con_goce_haberes.hasta}</td>
                  <td>{dato.lic_sin_goce_haberes.desde}</td>
                  <td>{dato.lic_sin_goce_haberes.hasta}</td>
                  <td>{dato.baja_salario}</td>
                  <td>{dato.observacion}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Detalle del Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Padron</strong></span>
              <input class="form-control"
                type='text' name='padron'
                value={planillaMensual.padron}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Nombre</strong></span>
              <input class="form-control"
                type='text' name='nombre'
                value={planillaMensual.nombre}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Apellido</strong></span>
              <input class="form-control"
                type='text' name='apellido'
                value={planillaMensual.apellido}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Espacio Curricular</strong></span>
              <input class="form-control"
                type='text' name='nombre'
                value={planillaMensual.espacio_curricular}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Fecha Nacido</strong></span>
              <input class="form-control"
                type='text' name='fecdha_nacio'
                value={planillaMensual.fecha_nacio}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>CUIL</strong></span>
              <input class="form-control"
                type='text' name='cuil'
                value={planillaMensual.cuil}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Alta</strong></span>
              <input class="form-control"
                type='text' name='alta'
                value={planillaMensual.alta}
                aria-describedby="basic-addon3 basic-addon4"
                disabled />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Baja</strong></span>
              <input class="form-control"
                type='date' name='baja'
                value={planillaMensual.baja}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">Días Oblig. Descontar</span>
              <input class="form-control"
                type='number' name='dias_oblig_descontar'
                value={planillaMensual.dias_oblig_descontar}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>
 
          <p><strong>Lic. con Goce Haberes</strong></p>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Desde</strong></span>
              <input class="form-control"
                type='date'
                name="planillaMensual.lic_con_goce_haberes.desde"
                value={planillaMensual.lic_con_goce_haberes.desde}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>
  
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Hasta</strong></span>
              <input class="form-control"
                type='date'
                name="planillaMensual.lic_con_goce_haberes.hasta"
                value={planillaMensual.lic_con_goce_haberes.hasta}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>

          <p><strong>Lic. sin Goce Haberes</strong></p>
          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Desde</strong></span>
              <input class="form-control"
                type='date'
                name="planillaMensual.lic_sin_goce_haberes.desde"
                value={planillaMensual.lic_sin_goce_haberes.desde}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Hasta</strong></span>
              <input class="form-control"
                type='date'
                name="planillaMensual.lic_sin_goce_haberes.hasta"
                value={planillaMensual.lic_sin_goce_haberes.hasta}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Baja Salario {planillaMensual.baja_salario}</strong></span>
              <input class="form-control"
                type='text'
                name="baja_salario"
                value={planillaMensual.baja_salario}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>

          <div class="mb-3">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3"><strong>Observación</strong></span>
              <textarea class="form-control"
                name="observacion"
                value={planillaMensual.observacion}
                onChange={manejarCambio}
                aria-describedby="basic-addon3 basic-addon4" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={actualizar}>
            Actualizar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Planilla;
