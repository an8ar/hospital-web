import { baseApi } from '..';

export const patientApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPatient: build.query({
            query: (body) => `api/patients/${body}`
        }),
    }),
}); 
export const {useGetPatientQuery} = patientApi;