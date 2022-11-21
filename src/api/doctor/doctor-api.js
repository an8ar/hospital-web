import { baseApi } from '..';

export const doctorApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctor: build.mutation({
            query: (body) => ({
                url: 'api/doctor/',
                method: 'POST',
                body,
            })
        })
    }),
}); 
export const {useGetDoctorMutation} = doctorApi;