import type { UseFormReturn } from "react-hook-form";
import type z from "zod";
import type { PostInvoiceSchema } from "../schemas";
import type { InvoiceItemInterface } from "@/store/slices/types";

export type ItemTableType = {
    form: UseFormReturn<z.infer<typeof PostInvoiceSchema>>;
}

export type ItemCardType = {
    item: InvoiceItemInterface
}