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
        `?key=pk.6a6cfebf2b64e1443aace153c5b7acb1&lat=${lat}&lon=${lon}&format=json&`,
      transformResponse: (res: LocationType) => {
        locationSchema.parse(res);
        return res;
      },
    }),
  }),
});

export const { useGetCityGeoQuery } = locationApi;

// https://us1.locationiq.com/v1/reverse?key=Your_API_Access_Token&lat=51.50344025&lon=-0.12770820958562096&format=json&
