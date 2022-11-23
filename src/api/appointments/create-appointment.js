import { baseApi } from '..';

export const createAppointment = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAppointmentPatient: build.mutation({
            query: (body) => ({
                url: '/api/appointments_create',
                method: 'POST',
                body,
            }),
        }),
        login: build.mutation({
            query: (body) => ({
                url: 'api/token/',
                method: 'POST',
                body,
            })
        })
    }),
}); 
export const {useCreateAppointmentPatientMutation} = createAppointment;

