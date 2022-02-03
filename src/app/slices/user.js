import { createSlice } from "@reduxjs/toolkit";

// User Slice
const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: false,
        user: {}
    },
    reducers: {
        // Login
        login: (state, action) => {
            let { name } = action.payload;

            state.status = true
            state.user = {
                name: name,
                role: 'customer',
                email: 'jhondoe@gmail.com',
                pass: 'jhondoe123'
            }
        },
        // Register
        register: (state, action) => {
            let { user, email, pass } = action.payload;
            state.status = true
            state.user = {
                name: user,
                role: 'customer',
                email: email,
                pass: pass
            }
        },
        // Logout
        logout: (state) => {
            state.status = false
            state.user = {}
        }
    }
})

const userReducer = userSlice.reducer
export default userReducer
