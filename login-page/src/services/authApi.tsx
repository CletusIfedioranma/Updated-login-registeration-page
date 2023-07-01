import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/Query/react';

export const authApi = createApi({
    reducerPath;'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https;//testto app.harokuapp.com"
    })
    endpoints:(builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string; password: string}) => {
                return{
                    url: "/users/signin",
                    method: "post",
                    body,
                }
            }
        })
        RegisterUser: builder.mutation({
            query: (body: {
                firstName: string, 
                lastName: string, 
                email: string; 
                password: string
            }) => {
                return{
                    url: "/users/signup",
                    method: "post",
                    body,
                }
            }
        })
    })
})

export const {useLoginUsermutation userRegistrationMutation} = authApi;