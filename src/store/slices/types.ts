
export interface InvoiceItemInterface {
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
    custome: {
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

