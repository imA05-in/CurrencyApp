import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: "currencySlice",
    initialState:{
        currencyRate: null
    },
     reducers:{
        setCurrencyRate: function(state,action){
            state.currencyRate = action.payload
        },
        clearCurrencyRate: function(state){
            state.currencyRate = null
        }
     }
})

export const {setCurrencyRate, clearCurrencyRate} = currencySlice.actions

export default currencySlice.reducer