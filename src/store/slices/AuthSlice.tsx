import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { AuthStateInterface } from './types'


// Define a type for the slice state



// Define the initial state using that type
const initialState: AuthStateInterface = {
    refresh_token: null,
    access_token: null,
    user: {
        id: 0,
        email: '',
        role: '',
        organization: '',
    }
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
})

export const { } = AuthSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const authState = (state: RootState) => state.auth

export default AuthSlice.reducer