import { baseApi } from '..';

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: 'api/token/',
                method: 'POST',
                body,
            })
        })
    }),
}); 
export const { useLoginMutation} = authApi;




