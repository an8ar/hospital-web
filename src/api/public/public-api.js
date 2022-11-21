import { baseApi } from '..';

export const adminApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctors: build.query({
            query: () => ({
                url: 'api/doctors'
            })
        }),
        getDepartments: build.query({
            query: ()=>({
                url:'api/departments'
            })
        })
    }),
});
export const { useGetDoctorsQuery,useGetDepartmentsQuery } = adminApi;