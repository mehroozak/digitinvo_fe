import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { InvoiceItemInterface } from './types'
import type { ValueOf } from 'type-fest'


// Define a type for the slice state



// Define the initial state using that type
const initialState: InvoiceItemInterface = {
    "hsCode": "",
    "productDescription": "",
    "rate": '',
    "uoM": "",
    "quantity": 0,
    "totalValues": 0,
    "valueSalesExcludingST": 0,
    "fixedNotifiedValueOrRetailPrice": 0,
    "salesTaxApplicable": 0,
    "salesTaxWithheldAtSource": 0,
    "extraTax": 0,
    "furtherTax": 0,
    "fedPayable": 0,
    "discount": 0,
    "saleType": "",
    "sroItemSerialNo": "",
}

export const InvoiceItemSlice = createSlice({
    name: 'invoiceItem',
    initialState,
    reducers: {
        setInvoiceItem: (state: Draft<InvoiceItemInterface>, action: PayloadAction<{ key: keyof InvoiceItemInterface, value: ValueOf<InvoiceItemInterface> }>) => {
            const { key, value } = action.payload
            // @ts-ignore:next-line
            state[key] = value
        },
        resetItem: (state: Draft<InvoiceItemInterface>) => {
            return {...initialState}
        }
    },
})

export const { } = InvoiceItemSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const invoiceItemState = (state: RootState) => state.invoiceItem

export default InvoiceItemSlice.reducer