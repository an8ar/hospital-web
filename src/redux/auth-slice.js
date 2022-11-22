import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../api/auth/auth-api';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
}

const initialState = {
    accessToken: null,
    refreshToken: null,
    user: {
        username: null,
        email: null,
        role: null,
        id: null,
    }
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutAction(state) {
            state.accessToken = null;
            state.refreshToken = null;
            state.user.username = null;
            state.user.email=null;
            state.user.role = null;
            state.user.id=null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.accessToken = action.payload.access;
                state.refreshToken = action.payload.refresh;
                state.user.role = action.payload.role;
                state.user.username = action.payload.username;
                state.user.email = action.payload.email;
                state.user.id = action.payload.id;
            })
    }
})

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
export const { logoutAction } = authSlice.actions;
