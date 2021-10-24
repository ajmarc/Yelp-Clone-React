import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { rtkApi } from "./Services/rtkApi";

export const store = configureStore({
  reducer: {
    [rtkApi.reducerPath]: rtkApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware),
});

setupListeners(store.dispatch);
