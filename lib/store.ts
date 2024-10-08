import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import NavButtonsReducer from './features/navbutton/navbuttonSlice'
import CurrencySelectorReducer  from './features/currencySelector/currencySelectorSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      currencySelector: CurrencySelectorReducer,
      counter: counterReducer,
      NavButtons: NavButtonsReducer 
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']