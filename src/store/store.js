import { configureStore } from "@reduxjs/toolkit";
import currencySliceReducer from "./currencySlice";

const store = configureStore({
    reducer:currencySliceReducer
})

export default store