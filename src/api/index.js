import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
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