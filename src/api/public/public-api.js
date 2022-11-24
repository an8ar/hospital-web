import { baseApi } from '..'

export const publicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query({
      query: () => ({
        url: 'api/doctors',
      }),
    }),
    getDepartments: build.query({
      query: () => ({
        url: 'api/departments',
      }),
    }),
  }),
})
export const { useGetDoctorsQuery,useGetDepartmentsQuery } = publicApi
