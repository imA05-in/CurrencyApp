import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
    name: "currencySlice",
    initialState:{
        currencyRate: null,
        from: {
            fAmount:0,
            fCurrency:"usd",
        },
        to:{
            tAmount: 0,
            tCurrency: "inr",
        }
    },
     reducers:{
        setCurrencyRate: function(state,action){
            state.currencyRate = action.payload.currencyRate
        },
        clearCurrencyRate: function(state){
            state.currencyRate = null;
            state.from.fAmount = 0;
            state.to.tAmount = 0;
        },
        setfrom: function(state, action){
            state.from.fAmount = action.payload.fAmount
            state.from.fCurrency = action.payload.fCurrency
        },
        setto: function (state, action){
            state.to.tAmount = action.payload.tAmount
            state.to.tCurrency = action.payload.tCurrency
        }
     }
})

export const {setCurrencyRate, clearCurrencyRate,setfrom, setto} = currencySlice.actions

export default currencySlice.reducer