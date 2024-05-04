import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { accountSchema, AccountType } from "../schema/accountSchema";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<AccountType[], null>({
      query: () => "/users",
      transformResponse: (response: AccountType[]) => {
        for (const user of response) {
          accountSchema.parse(user);
        }
        return response;
      },
    }),
    getUserById: builder.query<AccountType, string>({
      query: (id: string) => `/users/${id}`,
      transformResponse: (response: AccountType) => {
        accountSchema.parse(response);
        return response;
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi;
