import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { yelpAPiKey } from "../Config/config";

export const rtkApi = createApi({
  reducerPath: "rtkApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/",

    prepareHeaders: (header) => {
      header.set(`authorization`, `Bearer ${yelpAPiKey}`);
      return header;
    },
  }),
  endpoints: (builder) => ({
    getResultsByTermLocation: builder.query({
      query: ({ name, loc }) => `search?term=${name}&location=${loc}`,
    }),

    getResultById: builder.query({
      query: (id) => id,
    }),

    getResultByLatitudeLongitude: builder.query({
      query: ({ term, lat, lng }) =>
        `search?term=${term}&latitude=${lat}&longitude=${lng}`,
    }),
  }),
});

export const {
  useGetResultsByTermLocationQuery,
  useGetResultByIdQuery,
  useGetResultByLatitudeLongitudeQuery,
} = rtkApi;
