import { z } from "zod";

export const locationSchema = z.object({
  place_id: z.string(),
  licence: z.string(),
  osm_type: z.string(),
  osm_id: z.string(),
  lat: z.string(),
  lon: z.string(),
  display_name: z.string(),
  address: z.object({
    road: z.string(),
    neighbourhood: z.string(),
    suburb: z.string(),
    city: z.string(),
    state: z.string(),
    postcode: z.string(),
    country: z.string(),
    country_code: z.string(),
  }),
  boundingbox: z.array(z.string()),
});

export type LocationType = z.infer<typeof locationSchema>;
