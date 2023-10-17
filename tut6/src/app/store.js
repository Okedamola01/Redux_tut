import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false, // Disable the ImmutableStateInvariantMiddleware
        }).concat(apiSlice.middleware),
    devTools: true
});
