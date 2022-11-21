import { baseApi } from '..';

export const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctors: build.query({
            query: () => ({
                url: 'api/doctors'
            })
        })
    }),
});
export const { useGetDoctorsQuery } = adminApi;