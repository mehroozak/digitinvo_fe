import { createSlice, type Draft, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { InvoiceItemInterface, LookUpStateInterface } from './types'
import type { ValueOf } from 'type-fest'


// Define a type for the slice state



// Define the initial state using that type
const initialState: LookUpStateInterface = {
    province: [{
        "stateProvinceCode": 7,
        "stateProvinceDesc": "PUNJAB"
    },
    {
        "stateProvinceCode": 8,
        "stateProvinceDesc": "SINDH"
    }
    ],
    docType: [{
        "docTypeId": 4,
        "docDescription": "Sale Invoice"
    },
    {
        "docTypeId": 9,
        "docDescription": "Debit Note"
    }],
    itemCode: [{
        "hS_CODE": "8432.1010",
        "description": "NUCLEAR REACTOR, BOILERS, MACHINERY AND MECHANICAL APPLIANCES; PARTS THEREOF. - AGRICULTURAL, HORTICULTURAL OR FORESTRY MACHINERY FOR SOIL PREPARATION OR CULTI- VATION; LAWN OR SPORTS GROUND ROLLERS. - CHISEL PLOUGHS"
    },
    {
        "hS_CODE": "0304.7400",
        "description": "FISH AND CRUSTACEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES - FISH FILLETS AND OTHER FISH MEAT (WHETHER OR NOT MINCED), FRESH, CHILLED OR FROZEN. - HAKE (MERLUCCIUS SPP., UROPHYCIS SPP.)"
    }],
    sroItemCode: [
        {
            "srO_ITEM_ID": 724,
            "srO_ITEM_DESC": "9"
        },
        {
            "srO_ITEM_ID": 728,
            "srO_ITEM_DESC": "1"
        }
    ],
    transTypeCode: [
        {
            "transactioN_TYPE_ID": 82,
            "transactioN_DESC": "DTRE goods"
        },
        {
            "transactioN_TYPE_ID": 87,
            "transactioN_DESC": "Special procedure cottonseed"
        },
        {
            "transactioN_TYPE_ID": 111,
            "transactioN_DESC": "Electricity Supplied to marble/granite industry"
        }
    ],
    uom: [
        {
            "uoM_ID": 77,
            "description": "Square Metre"
        },
        {
            "uoM_ID": 13,
            "description": "KG"
        }
    ]
}

export const LookUpSlice = createSlice({
    name: 'lookup',
    initialState,
    reducers: {

    },
})

export const { } = LookUpSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const lookupState = (state: RootState) => state.lookup

export default LookUpSlice.reducer