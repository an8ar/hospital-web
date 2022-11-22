import { baseApi } from '..';


export const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctor: build.query({
            query: (body) =>`api/doctors/${body}/`, 
        }),
    }),
}); 
export const {useGetDoctorQuery} = doctorApi;