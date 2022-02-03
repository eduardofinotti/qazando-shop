import {createSlice} from "@reduxjs/toolkit";

// Settings Slice
const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        cookie: false,
        stopCookie:false,
        promoCenter: false,
        promoStatus:false,
        stopPromo:false,
    },
    reducers: {
        // Promo Center Modal Stop
        stopPromo: (state) => {
            state.stopPromo = true
        },
        // Promo Modal first appare
        promoStatus: (state) => {
            state.promoStatus = true
        },
        // Show / hide
        promoCenter: (state) => {
            state.promoCenter = !state.promoCenter
        },
        // Bottom Cookie Stop
        stopCookie: (state) => {
            state.stopCookie = true
        },
        // Cookie Show / hide
        cookie: (state) => {
            state.cookie = !state.cookie
        },
    }
})

const settingsReducer = settingsSlice.reducer
export default settingsReducer
