
export type InvoiceItemInterface {
    key?: number,
    hsCode: string,
    productDescription: string,
    rate: string,
    uoM: string,
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
    saleType: string,
    sroItemSerialNo?: string,
}


export interface InvoiceStateInterface {
    id?: number,
    invoiceType: string,
    invoiceDate: string,
    sellerNTNCNIC: string,
    sellerBusinessName: string,
    sellerProvince: string,
    sellerAddress: string,
    customer: {
        buyerNTNCNIC?: string,
        buyerBusinessName: string,
        buyerProvince: string,
        buyerAddress: string,
        buyeRegistrationType: string,
    },
    invoiceRefNo?: string,
    scenarioId?: string,
    items: InvoiceItemInterface[],
}

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
    province?: string,
    website?: string,
    description?: string,
    status?: string,
    logo?: MediaStateInterface | null,
}


type ProviceType= {
    stateProvinceCode: number,
    stateProvinceDesc: string
}
type DocTypeType = {
    docTypeId: number,
    docDescription: string
}
type ItemCodeType = {
    hS_CODE: string,
    description: string
}
type SroItemCodeType = {
  srO_ITEM_ID: number,
  srO_ITEM_DESC: string
}
type TransTypeCodeType = {
    transactioN_TYPE_ID: number,
    transactioN_DESC: string
}
type UomType = {
    uoM_ID: number,
    description: string
}

export interface LookUpStateInterface {
    province: ProviceType[]
    docType: DocTypeType[]
    itemCode: ItemCodeType[]
    sroItemCode: SroItemCodeType[]
    transTypeCode: TransTypeCodeType[]
    uom: UomType[]
}
