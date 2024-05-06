import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocationType, locationSchema } from "../schema/locationSchema";

interface Geo {
  lat: string;
  lon: string;
}

export const locationApi = createApi({
  reducerPath: "locationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://us1.locationiq.com/v1/reverse",
  }),
  endpoints: (builder) => ({
    getCityGeo: builder.query<LocationType, Geo>({
      query: ({ lat, lon }: Geo) =>
        `?key=${import.meta.env.VITE_APP_API_KEY}&lat=${lat}&lon=${lon}&format=json&`,
      transformResponse: (response: LocationType) => {
        locationSchema.parse(response);
        return response;
      },
    }),
  }),
});

export const { useGetCityGeoQuery } = locationApi;

// https://us1.locationiq.com/v1/reverse?key=Your_API_Access_Token&lat=51.50344025&lon=-0.12770820958562096&format=json&
