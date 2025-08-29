import { z } from "zod";


export type ProviceType = {
    stateProvinceCode: number,
    stateProvinceDesc: string
}
export type DocTypeType = {
    docTypeId: number,
    docDescription: string
}
export type ItemCodeType = {
    hS_CODE: string,
    description: string
}
export type SroItemCodeType = {
    srO_ITEM_ID: number,
    srO_ITEM_DESC: string
}
export type TransTypeCodeType = {
    transactioN_TYPE_ID: number,
    transactioN_DESC: string
}
export type UomType = {
    uoM_ID: number,
    description: string
}

export type RateType = {
    ratE_ID: number,
    ratE_DESC: string,
    ratE_VALUE: number
}


export interface InvoiceItemInterface {
    key?: number,
    hsCode: string,
    productDescription: string,
    rate: RateType | null,
    uoM: UomType,
    quantity: number,
    totalValues: number,
    valueSalesExcludingST: number,
    fixedNotifiedValueOrRetailPrice: number,
    salesTaxApplicable: number,
    salesTaxWithheldAtSource: number,
    extraTax?: number,
    furtherTax?: number,
    sroScheduleNo?: string,
    fedPayable?: number,
    discount?: number,
    saleType: TransTypeCodeType | null,
    sroItemSerialNo?: string,
}


export interface InvoiceStateInterface {
    id?: number,
    invoiceType: DocTypeType | null,
    invoiceDate: string,
    sellerNTNCNIC: string,
    sellerBusinessName: string,
    sellerProvince: ProviceType | null,
    sellerAddress: string,
    customer: {
        buyerNTNCNIC?: string,
        buyerBusinessName: string,
        buyerProvince: ProviceType | null,
        buyerAddress: string,
        buyeRegistrationType: string,
    },
    invoiceRefNo?: string,
    scenarioId?: string,
    items: InvoiceItemInterface[],
}

// Zod schema for InvoiceStateInterface


export interface AuthStateInterface {
    refresh_token: string | null,
    access_token: string | null,
    user: {
        id: number,
        email: string,
        role: string,
        organization?: string,
    }
}

export interface MediaStateInterface {
    extension?: string;
    id?: number;
    media_type: string;
    name: string;
    url: string;
    uuid: string;
}

export interface OrganizationStateInterface {
    id: number,
    name: string,
    ntn: string,
    email?: string,
    phone?: string,
    address?: string,
    province?: ProviceType,
    website?: string,
    description?: string,
    status?: string,
    logo?: MediaStateInterface | null,
}


export interface LookUpStateInterface {
    province: ProviceType[]
    docType: DocTypeType[]
    itemCode: ItemCodeType[]
    sroItemCode: SroItemCodeType[]
    transTypeCode: TransTypeCodeType[]
    uom: UomType[]
}
