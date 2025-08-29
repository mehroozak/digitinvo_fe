import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { OrganizationStateInterface } from './types'


// Define the initial state using that type
const initialState: OrganizationStateInterface = {
    id: 7,
    name: 'Test Organization',
    address: 'Upper Mall, Lahore',
    ntn: '232322rf24ef',
    province: {
        "stateProvinceCode": 8,
        "stateProvinceDesc": "SINDH"
    },
    description: "This is a test organization",
    email: 'test@test.com',
    phone: '03001234567',
    website: 'www.test.com',
    status: 'SANDBOX',
    logo: {
        uuid: "989-6987-bin0-nbjsb",
        media_type: "image",
        name: "test media",
        url: "src/assets/di_logo.png",
    }
}

export const OrganizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
    },
})

export const { } = OrganizationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const organizationState = (state: RootState) => state.organization
export const organizationLogo = (state: RootState) => state.organization.logo

export default OrganizationSlice.reducer