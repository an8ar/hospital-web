import { baseApi } from '..';

export const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        registerDoctor: build.mutation({
            query: (body) => ({
                url: 'api/admin/doctor/',
                method: 'POST',
                body
            }),
        }),
        registerPatient: build.mutation({
            query: (body) => ({
                url: 'api/admin/patient/',
                method: 'POST',
                body
            }),
        }),
        getDoctors: build.query({
            query: () => ({
                url: 'api/doctors'
            })
        }),
        getPatients: build.query({
            query: () => ({
                url: 'api/patients'
            })
        }),

    }),
});
export const { useGetDoctorsQuery, useRegisterDoctorMutation, useRegisterPatientMutation, useGetPatientsQuery } = adminApi;