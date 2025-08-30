import * as z from "zod";

export const ProviceTypeSchema = z.object({
    stateProvinceCode: z.number(),
    stateProvinceDesc: z.string(),
});

export const DocTypeTypeSchema = z.object({
    docTypeId: z.number(),
    docDescription: z.string(),
});

export const RateTypeSchema = z.object({
    ratE_ID: z.number(),
    ratE_DESC: z.string(),
    ratE_VALUE: z.number(),
});

export const TransTypeCodeTypeSchema = z.object({
    transactioN_TYPE_ID: z.number(),
    transactioN_DESC: z.string(),
});

export const UomTypeSchema = z.object({
    uoM_ID: z.number(),
    description: z.string(),
});

export const SroItemCodeTypeSchema = z.object({
    srO_ITEM_ID: z.number(),
    srO_ITEM_DESC: z.string()
})

export const SroScheduleNoTypeSchema = z.object({
  srO_ID: z.number(),
  srO_DESC: z.string(),
});

export const PostInvoiceItemSchema = z.object({
    hsCode: z.string().min(1, "HS Code is required"),
    productDescription: z.string().min(1, "Item description is required"),
    rate: RateTypeSchema,
    uoM: UomTypeSchema,
    quantity: z.coerce.number<number>().min(1, "Quantity must be at least 1"),
    totalValues: z.coerce.number<number>().min(0, "Total Value must be at least 0"),
    valueSalesExcludingST: z.coerce.number<number>().min(0, "Value Sales Excluding ST must be at least 0"),
    fixedNotifiedValueOrRetailPrice: z.coerce.number<number>().min(0, "Fixed Notified Value or Retail Price must be at least 0"),
    salesTaxApplicable: z.coerce.number<number>().min(0, "Amount of Sales Tax/ FED insales tax mode must be at least 0"),
    salesTaxWithheldAtSource: z.coerce.number<number>().min(0, "Amount of Sales Tax/ FED withheld at source must be at least 0"),
    extraTax: z.number().min(0, "Amount of Extra Tax must be at least 0").optional(),
    furtherTax: z.number().min(0, "Amount of Further Tax must be at least 0").optional(),
    sroScheduleNo: SroScheduleNoTypeSchema.optional(),
    fedPayable: z.number().min(0, "Amount of FED Payable must be at least 0").optional(),
    discount: z.number().min(0, "Amount of Discount must be at least 0").optional(),
    saleType: TransTypeCodeTypeSchema,
    sroItemSerialNo: SroItemCodeTypeSchema.optional(),
})

export const PostInvoiceSchema = z.object({
    invoiceRefNo: z.string().optional(),
    invoiceType: DocTypeTypeSchema,
    invoiceDate: z.iso.date(),
    sellerNTNCNIC: z.string().min(1, "Seller NTN/CNIC is required"),
    sellerBusinessName: z.string().min(1, "Seller Business Name is required"),
    sellerProvince: ProviceTypeSchema,
    sellerAddress: z.string().min(1, "Seller Address is required"),
    customer: z.object({
        buyerNTNCNIC: z.string().optional(),
        buyerBusinessName: z.string().min(1, "Buyer Business Name is required"),
        buyerProvince: ProviceTypeSchema.nullable(),
        buyerAddress: z.string().min(1, "Buyer Address is required"),
        buyeRegistrationType: z.string().min(1, "Buyer Registration Type is required"),
    }),
    scenarioId: z.string().optional(),
    items: z.array(PostInvoiceItemSchema).min(1, "At least one item is required"),
});

export type LoginFormType = z.infer<typeof PostInvoiceSchema>;











// export const InvoiceItemInterfaceSchema = z.object({
//     key: z.number().optional(),
//     hsCode: z.string(),
//     productDescription: z.string(),
//     rate: RateTypeSchema.nullable(),
//     uoM: z.string(),
//     quantity: z.number(),
//     totalValues: z.number(),
//     valueSalesExcludingST: z.number(),
//     fixedNotifiedValueOrRetailPrice: z.number(),
//     salesTaxApplicable: z.number(),
//     salesTaxWithheldAtSource: z.number(),
//     extraTax: z.number().optional(),
//     furtherTax: z.number().optional(),
//     sroScheduleNo: z.string().optional(),
//     fedPayable: z.number().optional(),
//     discount: z.number().optional(),
//     saleType: TransTypeCodeTypeSchema.nullable(),
//     sroItemSerialNo: z.string().optional(),
// });

// export const InvoiceStateInterfaceSchema = z.object({
//     id: z.number().optional(),
//     invoiceType: DocTypeTypeSchema.nullable(),
//     invoiceDate: z.string(),
//     sellerNTNCNIC: z.string(),
//     sellerBusinessName: z.string(),
//     sellerProvince: ProviceTypeSchema.nullable(),
//     sellerAddress: z.string(),
//     customer: z.object({
//         buyerNTNCNIC: z.string().optional(),
//         buyerBusinessName: z.string(),
//         buyerProvince: ProviceTypeSchema.nullable(),
//         buyerAddress: z.string(),
//         buyeRegistrationType: z.string(),
//     }),
//     invoiceRefNo: z.string().optional(),
//     scenarioId: z.string().optional(),
//     items: z.array(InvoiceItemInterfaceSchema),
// });