import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountType } from "../../../schema/accountSchema";

interface HostState {
  accounts: AccountType[];
}

const initialState: HostState = {
  accounts: [],
};

const hostSlice = createSlice({
  name: "hostSlice",
  initialState,
  reducers: {
    buyAccount: (state, action: PayloadAction<AccountType>) => {
      state.accounts.push(action.payload);
      console.log(state.accounts.length);
    },
  },
});

export const { buyAccount } = hostSlice.actions;
export default hostSlice.reducer;
