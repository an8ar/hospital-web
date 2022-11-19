import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Todos"],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:8000/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.accessToken;
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers;
        },
    }),
    endpoints: () => ({
        
    }),
    
});