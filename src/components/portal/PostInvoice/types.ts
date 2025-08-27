import type { UseFormReturn } from "react-hook-form"
import type z from "zod";
import type { PostInvoiceSchema } from "./schemas";

export type BenificiaryType = {
    form?: UseFormReturn<z.infer<typeof PostInvoiceSchema>>;
}

export type CustomerFormType = {
    form?: any
}

export type ItemFormType = {
    form?: any
}