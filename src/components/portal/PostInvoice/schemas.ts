import * as z from "zod";

export const PostInvoiceItemSchema = z.object({
    hsCode: z.string().min(1, "HS Code is required"),
    productDescription: z.string().min(1, "Item description is required"),
    rate: z.number().min(0, "Tax Rate must be at least 0"),
    uoM: z.string().min(1, "Unit of Measure is required"),
    quantity: z.number().min(1, "Quantity must be at least 1"),
    totalValues: z.number().min(0, "Total Value must be at least 0"),
    valueSalesExcludingST: z.number().min(0, "Value Sales Excluding ST must be at least 0"),
    fixedNotifiedValueOrRetailPrice: z.number().min(0, "Fixed Notified Value or Retail Price must be at least 0"),
    salesTaxApplicable: z.number().min(0, "Amount of Sales Tax/ FED insales tax mode must be at least 0"),
    salesTaxWithheldAtSource: z.number().min(0, "Amount of Sales Tax/ FED withheld at source must be at least 0"),
    extraTax: z.number().min(0, "Amount of Extra Tax must be at least 0").optional(),
    furtherTax: z.number().min(0, "Amount of Further Tax must be at least 0").optional(),
    sroScheduleNo: z.string().optional(),
    fedPayable: z.number().min(0, "Amount of FED Payable must be at least 0").optional(),
    discount: z.number().min(0, "Amount of Discount must be at least 0").optional(),
    saleType: z.string().min(1, "Sale Type is required"),
    sroItemSerialNo: z.string().optional(),
})

export const PostInvoiceSchema = z.object({
    refNo: z.string().optional(),
    invoiceType: z.string().min(1, "Invoice type is required"),
    invoiceDate: z.iso.date(),
    sellerNTNCNIC: z.string().min(1, "Seller NTN/CNIC is required"),
    sellerBusinessName: z.string().min(1, "Seller Business Name is required"),
    sellerProvince: z.string().min(1, "Seller Province is required"),
    sellerAddress: z.string().min(1, "Seller Address is required"),
    customer: z.object({
        buyerNTNCNIC: z.string().optional(),
        buyerBusinessName: z.string().min(1, "Buyer Business Name is required"),
        buyerProvince: z.string().min(1, "Buyer Province is required"),
        buyerAddress: z.string().min(1, "Buyer Address is required"),
        buyeRegistrationType: z.string().min(1, "Buyer Registration Type is required"),
    }),
    invoiceRefNo: z.string().optional(),
    scenarioId: z.string().optional(),
    items: z.array(PostInvoiceItemSchema).min(1, "At least one item is required"),
});

export type LoginFormType = z.infer<typeof PostInvoiceSchema>;