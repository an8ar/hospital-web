import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth/auth-api';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import decode from 'jwt-decode';
const persistConfig = {
    key: 'auth',
    storage,
}

const initialState = {
    accessToken: null,
    refreshToken: null,
    user: null
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutAction(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.user =  null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                const { username, email, user_id, role } = decode(action.payload.access);
                state.accessToken = action.payload.access;
                state.refreshToken = action.payload.refresh;
                state.user = { username, email, user_id, role };
            })
    }
})

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export const { logoutAction } = authSlice.actions;
