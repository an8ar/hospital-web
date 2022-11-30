import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'appointmentUnlogged',
    storage,
}

const initialState = {
     appointment: {
            date: null,
            timeslot: null,
            doctor: null,
            patient: null,
        }
    
}
const appointmentUnlogged = createSlice({
    name: 'appointmentUnlogged',
    initialState,
    reducers: {
        makeAppointment(state, action) {
            state.appointment.date= action.payload.date;
            state.appointment.timeslot= action.payload.timeslot;
            state.appointment.doctor= action.payload.doctor;
            state.appointment.patient= action.payload.patient;
        },
        dropAppointment(state, action) {
            state.appointment.date= null;
            state.appointment.timeslot= null;
            state.appointment.doctor= null;
            state.appointment.patient= null;
        },
        
    },
})

export const appointmentUnloggedReducer = persistReducer(persistConfig, appointmentUnlogged.reducer);
export const { makeAppointment, dropAppointment } = appointmentUnlogged.actions;
