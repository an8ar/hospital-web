import { baseApi } from '..';

export const doctorAppointmentsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDoctorAppointments: build.query({
            query: (body) => ({
                url: '/api/appointments_doctor',
                params: {username: body}
            })
        }),
    }),
}); 
export const {useGetDoctorAppointmentsQuery} = doctorAppointmentsApi;

