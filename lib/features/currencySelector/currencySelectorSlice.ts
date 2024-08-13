import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface CurrencyState {
  currency: string;
  symbol:string;
}

// Define the initial state using that type
const initialState : CurrencyState = {
  currency: "gbp",
  symbol:"£",
} 


export const CurrencySelectorSlice = createSlice({
  name: 'currencySelector',
  initialState,
  reducers: {
    setCurrency:(state, item: PayloadAction<string> ) => {
      state.currency = item.payload
      switch (item.payload) {
        case "gbp":
          state.symbol = "£";
          break;
        case "eur":
          state.symbol = "€";
          break;
        case "usd":
          state.symbol = "$";
          break;
        case "btc":
          state.symbol = "₿";
          break;
        case "eth":
          state.symbol = "♦";
          break;
        case "ltc":
          state.symbol = "Ł";
          break;
        default:
          state.symbol = "£";
      }
    }
  }
})

export const { setCurrency } = CurrencySelectorSlice.actions

export default CurrencySelectorSlice.reducer