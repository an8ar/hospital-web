import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { authApi } from "../api/auth/auth-api";
import { doctorApi } from "../api/doctor/doctor-api";
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [doctorApi.reducerPath]: doctorApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat( authApi.middleware, doctorApi.middleware)
})

export const persistor = persistStore(store)