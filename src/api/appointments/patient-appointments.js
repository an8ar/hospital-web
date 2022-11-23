import { baseApi } from '..';

export const patientAppointmentsApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPatientAppointments: build.query({
            query: (body) => ({
                url: '/api/appointments_patient',
                params: {username: body}
            })
        }),
    }),
});
export const { useGetPatientAppointmentsQuery } = patientAppointmentsApi;

