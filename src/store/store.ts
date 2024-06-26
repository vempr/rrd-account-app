import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import { locationApi } from "../services/locationApi";
import hostReducer from "./features/host/hostSlice.ts";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    host: hostReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(locationApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
