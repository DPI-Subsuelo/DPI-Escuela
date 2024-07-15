import { configureStore } from "@reduxjs/toolkit";
import { escuelaStore } from "./appSlice";
import { personaSlice } from "./appSlice";
import { objetosApi } from "./apiSlice";

export const store = configureStore({
    reducer: {
        novedad: escuelaStore.reducer,
        persona: personaSlice.reducer,
        [objetosApi.reducerPath]: objetosApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(objetosApi.middleware)
})