import { createSlice } from "@reduxjs/toolkit"

export const escuelaStore = createSlice({
    name: "novedad",
    initialState: {
        planillaMensual:{
            _id: "",
            nombre: "",
            apellido: "",
            cargoHsCatedras: "",
            padron: "",
            espacio_curricular: "",
            fecha_nacio: "",
            cuil: "",
            alta: "",
            baja: "",
            dias_oblig_descontar: "",
            causal_reemplazo: "",
            lic_con_goce_haberes: {
                desde: "",
                hasta: "",
            },
            lic_sin_goce_haberes: {
                desde: "",
                hasta: "",
            },
            baja_salario: "",
            observacion: ""
        }
    },
    reducers: {
        cargarPlanilla: (state, action)=> {
           state.planillaMensual = { ...state.planillaMensual, ...action.payload} 
        },
        cargarSubdocumentoPlanilla: (state, action) => {
            const { subdoc, field, value } = action.payload;
            state.planillaMensual[subdoc][field] = value;
        } 
     }
});

export const { cargarPlanilla,cargarSubdocumentoPlanilla } = escuelaStore.actions;

export const personaSlice = createSlice({
    name: "persona",
    initialState: {
        usuario: {
            nombre: '',
            apellido: '',
            escuela: '',
            login: '',
            clave: '',
            auth: false,
        },
    },
    reducers: {
        changeAuth: (state, action) => {
            // state.usuario = action.payload;
            state.usuario = { ...state.usuario, ...action.payload };
        }
    }
    });
    
    export const { changeAuth } = personaSlice.actions;
