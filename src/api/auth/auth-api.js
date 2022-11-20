import { baseApi } from '..';

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: 'api/token/',
                method: 'POST',
                body,
            })
        }),
        register: build.mutation({
            query: (body) => ({
                url: 'api/register/',
                method: 'POST',
                body
            }),
        }),
        registerDoctor: build.mutation({
            query: (body) => ({
                url: 'api/register/',
                method: 'POST',
                body
            }),
        }),
        registerPatient: build.mutation({
            query: (body) => ({
                url: 'api/register/',
                method: 'POST',
                body
            }),
        }),
    }),
}); 
export const { useLoginMutation, useRegisterMutation, useRegisterDoctorMutation, useRegisterPatientMutation } = authApi;