import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import type { InvoiceStateInterface } from './types'
import moment from 'moment'


// Define a type for the slice state



// Define the initial state using that type
const initialState: InvoiceStateInterface = {
  invoiceType: null,
  invoiceDate: moment().format('YYYY-MM-DD'),
  sellerNTNCNIC: '',
  sellerBusinessName: '',
  sellerProvince: null,
  sellerAddress: '',
  customer: {
    buyerNTNCNIC: '',
    buyerBusinessName: '',
    buyerProvince: null,
    buyerAddress: '',
    buyeRegistrationType: '',
  },
  invoiceRefNo: '',
  scenarioId: '',
  items: [
    {
      "hsCode": "1234.56",
      "productDescription": "FISH AND CRUSTACEANS, MOLLUSCS AND OTHER AQUATIC INVERTEBRATES - FISH FILLETS AND OTHER FISH MEAT (WHETHER OR NOT MINCED), FRESH, CHILLED OR FROZEN. - HAKE (MERLUCCIUS SPP., UROPHYCIS SPP.)",
      "rate": null,
      "uoM": "pcs",
      "quantity": 100,
      "totalValues": 1850,
      "valueSalesExcludingST": 1700,
      "fixedNotifiedValueOrRetailPrice": 20,
      "salesTaxApplicable": 150,
      "salesTaxWithheldAtSource": 10,
      "extraTax": 5,
      "furtherTax": 2,
      "fedPayable": 0,
      "discount": 50,
      "saleType": null,
      "sroItemSerialNo": "SRO-001",
    },
    // {
    //   "hsCode": "7890.12",
    //   "productDescription": "Steel Rods",
    //   "rate": '50',
    //   "uoM": "kg",
    //   "quantity": 40,
    //   "totalValues": 2000,
    //   "valueSalesExcludingST": 1800,
    //   "fixedNotifiedValueOrRetailPrice": 55,
    //   "salesTaxApplicable": 180,
    //   "salesTaxWithheldAtSource": 12,
    //   "extraTax": 8,
    //   "furtherTax": 3,
    //   "fedPayable": 1,
    //   "discount": 100,
    //   "saleType": "Wholesale",
    //   "sroItemSerialNo": "SRO-002",
    // },
    // {
    //   "hsCode": "3456.78",
    //   "productDescription": "Cotton Shirts",
    //   "rate": '30',
    //   "uoM": "dozen",
    //   "quantity": 10,
    //   "totalValues": 300,
    //   "valueSalesExcludingST": 270,
    //   "fixedNotifiedValueOrRetailPrice": 35,
    //   "salesTaxApplicable": 25,
    //   "salesTaxWithheldAtSource": 2,
    //   "extraTax": 1,
    //   "furtherTax": 0,
    //   "fedPayable": 0,
    //   "discount": 10,
    //   "saleType": "Retail",
    //   "sroItemSerialNo": "SRO-003",
    // },
    // {
    //   "hsCode": "9012.34",
    //   "productDescription": "LED Bulbs",
    //   "rate": '12',
    //   "uoM": "box",
    //   "quantity": 50,
    //   "totalValues": 600,
    //   "valueSalesExcludingST": 540,
    //   "fixedNotifiedValueOrRetailPrice": 15,
    //   "salesTaxApplicable": 48,
    //   "salesTaxWithheldAtSource": 3,
    //   "extraTax": 2,
    //   "furtherTax": 1,
    //   "fedPayable": 0,
    //   "discount": 20,
    //   "saleType": "Wholesale",
    //   "sroItemSerialNo": "SRO-004",
    // },
    // {
    //   "hsCode": "5678.90",
    //   "productDescription": "Aluminum Sheets",
    //   "rate": '100',
    //   "uoM": "sheet",
    //   "quantity": 5,
    //   "totalValues": 500,
    //   "valueSalesExcludingST": 450,
    //   "fixedNotifiedValueOrRetailPrice": 110,
    //   "salesTaxApplicable": 40,
    //   "salesTaxWithheldAtSource": 5,
    //   "extraTax": 2,
    //   "furtherTax": 1,
    //   "fedPayable": 0,
    //   "discount": 25,
    //   "saleType": "Retail",
    //   "sroItemSerialNo": "SRO-005",
    // }
  ],
}

export const InvoiceSlice = createSlice({
  name: 'invoice',
  initialState,
  reducers: {
  },
})

export const { } = InvoiceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const invoiceState = (state: RootState) => state.invoice
export const invoiceitems = (state: RootState) => state.invoice.items

export default InvoiceSlice.reducer