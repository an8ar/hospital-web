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
    getDepartment: build.query({
      query: (body) => ({
        url: `api/departments/${body}`,
      }),
    }),
  }),
})
export const {
  useGetDoctorsQuery,
  useGetDepartmentsQuery,
  useGetDepartmentQuery,
} = publicApi
