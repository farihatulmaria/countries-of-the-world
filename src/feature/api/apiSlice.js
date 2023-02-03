import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
    reducerPath:"countriesApi",
    baseQuery:fetchBaseQuery({
        baseUrl: "https://restcountries.com/v3.1/"
    }),
    tagTypes:["Countries"],
    endpoints:(builder)=>({
        getAllCountries: builder.query({
            query:()=> "/all",
            providesTags:["Countries"]
        }),
    })
})

export const {useGetAllCountriesQuery,} = countriesApi