import { baseApi } from '..';

export const patientApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPatient: build.query({
            query: (body) => ({
                url: 'api/doctors',
                body
            })
        }),
    }),
}); 
export const {useGetPatientQuery} = patientApi;