import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: "baseApi",
    tagTypes: ["Appointments", "Timeslots"],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://csci361.pythonanywhere.com',
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