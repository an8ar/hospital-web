import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
import { authApi } from "../api/auth/auth-api";
import { appointmentsApi } from "../api/appointments/appointments";
import { appointmentUnloggedReducer } from "./appointment-unlogged";
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
        [appointmentsApi.reducerPath]: appointmentsApi.reducer,
        appointmentUnlogged: appointmentUnloggedReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat( authApi.middleware, appointmentsApi.middleware)
})

export const persistor = persistStore(store)