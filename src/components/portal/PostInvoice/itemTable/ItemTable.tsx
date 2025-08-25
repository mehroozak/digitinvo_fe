import type { FC } from "react";
import type { ItemTableType } from "./types";
import { Table, TableBody, TableHead, TableRow } from "@/components/elements/table";
import { useAppSelector } from "@/hooks/redux";
import { invoiceitems } from "@/store/slices/IinvoiceSlice";
import type { ColumnDef } from '@tanstack/react-table'
import type { InvoiceItemInterface } from "@/store/slices/types";
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"
import DataTable from "@/components/elements/dataTable";
import { Button } from "@/components/elements/button";
import { Trash, Pen } from "lucide-react";


const ItemTable: FC<ItemTableType> = ({ }) => {
    const invoiceItems = useAppSelector(invoiceitems);

    const columns: ColumnDef<InvoiceItemInterface>[] = [
        {
            header: 'HS Code', accessorKey: 'hsCode', meta: {

            }
        },
        { header: 'Description', accessorKey: 'productDescription' },
        { header: 'Rate', accessorKey: 'rate' },
        { header: 'Unit Of Measure', accessorKey: 'uoM' },
        { header: 'Quantity', accessorKey: 'quantity' },
        { header: 'Total Values', accessorKey: 'totalValues' },
        { header: 'Excluding GST', accessorKey: 'valueSalesExcludingST' },
        { header: 'Retail Price', accessorKey: 'fixedNotifiedValueOrRetailPrice' },
        { header: 'Tax', accessorKey: 'salesTaxApplicable' },
        { header: 'With Held Tax', accessorKey: 'salesTaxWithheldAtSource' },
        { header: 'Extra Tax', accessorKey: 'extraTax' },
        { header: 'Further Tax', accessorKey: 'furtherTax' },
        { header: 'FED Payable', accessorKey: 'fedPayable' },
        { header: 'Discount', accessorKey: 'discount' },
        { header: 'Sale Type', accessorKey: 'saleType' },
        { header: 'SRO Item Number', accessorKey: 'sroItemSerialNo' },
        {
            header: '', accessorKey: 'Action', cell: ({ row }) => (
                <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                        <Pen size={16} />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-destructive hover:bg-destructive/10">
                        <Trash size={16} />
                    </Button>
                </div>
            )
        },
    ]
    const headers = [
        { label: 'HS Code', key: 'hsCode' },
        { label: 'Description', key: 'productDescription' },
        { label: 'Rate', key: 'rate' },
        { label: 'Unit Of Measure', key: 'uoM' },
        { label: 'Quantity', key: 'quantity' },
        { label: 'Total Values', key: 'totalValues' },
        { label: 'Excluding GST', key: 'valueSalesExcludingST' },
        { label: 'Retail Price', key: 'fixedNotifiedValueOrRetailPrice' },
        { label: 'Tax', key: 'salesTaxApplicable' },
        { label: 'With Held Tax', key: 'salesTaxWithheldAtSource' },
        { label: 'Extra Tax', key: 'extraTax' },
        { label: 'Further Tax', key: 'furtherTax' },
        { label: 'FED Payable', key: 'fedPayable' },
        { label: 'Discount', key: 'discount' },
        { label: 'Sale Type', key: 'saleType' },
        { label: 'SRO Item Number', key: 'sroItemSerialNo' },
        { label: '', key: 'Action' },
    ];

    return (
        <DataTable columns={columns} data={invoiceItems} />
    )
}

export default ItemTable;