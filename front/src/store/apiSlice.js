import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const objetosApi = createApi({
    reducerPath: "objetosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
    endpoints: (builder) => ({
        getPlanillasMensuales: builder.query({
            query: () => "planillas",
            providesTags: ["Mensuales"],
        }),
        putPlanillaMensuales: builder.mutation({
            query: (planilla) => ({
                url: "planillas",
                method: "PUT",
                body: planilla,
            }),
            invalidatesTags: ["Mensuales"],
        }),
        // -------------USUARIOS------------------
        getUsuarios: builder.query({
            query: () => "usuarios",
            providesTags: ["usuarios"],
        }),
    })
});

export const {
    useGetPlanillasMensualesQuery,
    usePutPlanillaMensualesMutation,
    useGetUsuariosQuery
} = objetosApi;