import { baseApi } from '..'

export const publicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDoctors: build.query({
      query: () => ({
        url: 'api/doctors',
      }),
    }),
    getDoctor: build.query({
      query: (username) => ({
        url: `api/doctors/${username}`,
      }),
    }),
    
    getDepartments: build.query({
      query: () => ({
        url: 'api/departments',
      }),
    }),
    getDepartment: build.query({
      query: (body) => ({
        url: `api/departments/${body}`
      })
    }),
    getPatients: build.query({
      query: () => ({
        url: "api/patients/"
      })
    }),
    getServices: build.query({
      query: (id) => ({
        url: `api/services/${id}/`
      })
    }),
    getAllServices: build.query({
      query: (id) => ({
        url: `api/services/`
      })
    }),
  }),
})
export const { useGetDoctorQuery,useGetAllServicesQuery,useGetDoctorsQuery, useGetDepartmentsQuery, useGetDepartmentQuery, useGetPatientsQuery, useGetServicesQuery } = publicApi
