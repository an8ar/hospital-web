import { baseApi } from '..';
export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: 'api/token/',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Todos'],
        }),
        register: build.mutation({
            query: (body) => ({
                url: 'api/register/',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Todos'],
        })
    }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;