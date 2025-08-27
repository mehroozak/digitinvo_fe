import { configureStore } from '@reduxjs/toolkit'
import InvoiceReducer from './slices/IinvoiceSlice'
import AuthReducer from './slices/AuthSlice'
import OrganizationReducer from './slices/OrganizationSlice'
import InvoiceItemReducer from './slices/InvoiceItemSlice'
import LookUpReducer from './slices/lookupSlice'

const store = configureStore({
    reducer: {
        auth: AuthReducer,
        invoice: InvoiceReducer,
        organization: OrganizationReducer,
        invoiceItem: InvoiceItemReducer,
        lookup: LookUpReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store