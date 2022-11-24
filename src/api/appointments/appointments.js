import { baseApi } from '..';

export const appointmentsApi = baseApi.injectEndpoints({

    endpoints: (build) => ({
        getPatientAppointments: build.query({
            query: (body) => ({
                url: '/api/appointments_patient',
                params: { username: body }
            }),
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Appointments', id })),
                        { type: 'Appointments', id: 'LIST' },
                    ]
                    : [{ type: 'Appointments', id: 'LIST' }],
        }),
        createAppointment: build.mutation({
            query: (body) => ({
                url: '/api/appointments_create/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Appointments'],
        }),
        getDoctorAppointments: build.query({
            query: (body) => ({
                url: '/api/appointments_doctor',
                params: { username: body }
            }),
            invalidatesTags: ['Appointments'],
        }),
        getAvailableSlot: build.query({
            query: (body) => ({
                url: '/api/appointments_doctor_free',
                params: {
                    username: body.username,
                    date: body.date
                }
            }),
            invalidatesTags: ['Appointments'],
        }),
        deleteAppointment: build.mutation({
            query: (body) => ({
                url: `/api/appointments/${body}/`,
                method: "DELETE",
            }),
            invalidatesTags: ['Appointments'],
        })

    }),
});
export const { useDeleteAppointmentMutation, useCreateAppointmentMutation, useGetAvailableSlotQuery, useGetDoctorAppointmentsQuery, useGetPatientAppointmentsQuery } = appointmentsApi;

