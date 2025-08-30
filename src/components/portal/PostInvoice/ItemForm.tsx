import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { ItemFormType } from './types';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { lookupState } from '@/store/slices/lookupSlice';
import { PostInvoiceItemSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/elements/form';
import { Input } from '@/components/elements/input';
import { Textarea } from '@/components/elements/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/elements/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/elements/popover';
import { Button } from '@/components/elements/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/elements/command';
import { Card, CardContent } from '@/components/elements/card';
import type { RateType, SroItemCodeType, SroScheduleNoType, TransTypeCodeType } from '@/store/slices/types';
import { addItemToInvoice } from '@/store/slices/IinvoiceSlice';

const ItemForm: React.FC<ItemFormType> = ({ form: parentForm }) => {
  const dispatch = useAppDispatch()
  const date = parentForm.watch('invoiceDate')
  const province = parentForm.watch('sellerProvince')
  const lookups = useAppSelector(lookupState)
  const [taxClases, setTaxClases] = useState<RateType[]>([])
  const [sroSchedule, setSroSchedule] = useState<SroScheduleNoType[]>([])
  const [sroItems, setSroItems] = useState<SroItemCodeType[]>([])
  // const [transactionTypeObj, setTransactionTypeObj] = useState<TransTypeCodeType | null>(null)

  const form = useForm<z.infer<typeof PostInvoiceItemSchema>>({
    resolver: zodResolver(PostInvoiceItemSchema),
    defaultValues: {
      productDescription: '',
      rate: undefined,
      uoM: undefined,
      quantity: 0,
    }
  })
  const formVals = form.watch()
  console.log('Item', formVals)

  const salesType = form.watch('saleType')
  const taxRate = form.watch('rate')
  const sroScheduleNo = form.watch('sroScheduleNo')


  useEffect(() => {
    // /SaleTypeToRate?date=24-Feb2024&transTypeId=18&originationSupplier=1
    if (date && salesType?.transactioN_TYPE_ID && province?.stateProvinceCode) {
      // Implement Call For tax Rates 
      setTaxClases([
        {
          "ratE_ID": 734,
          "ratE_DESC": "18% along with rupees 60 per kilogram",
          "ratE_VALUE": 18
        }
        ,
        {
          "ratE_ID": 280,
          "ratE_DESC": "0%",
          "ratE_VALUE": 0
        }
      ])
    }
  }, [date, salesType, province])

  useEffect(() => {
    // /SroSchedule?rate_id=413&date=04-Feb-2024&origination_supplier_csv=1
    if (date && taxRate?.ratE_ID && province?.stateProvinceCode) {
      // Implement Call For SRO Schedule
      setSroSchedule([
        {
          "srO_ID": 7,
          "srO_DESC": "Zero Rated Gas"
        },
        {
          "srO_ID": 8,
          "srO_DESC": "5th Schedule"
        }
      ])
    }
  }, [date, taxRate, province])

  useEffect(() => {
    // /SroSchedule?rate_id=413&date=04-Feb-2024&origination_supplier_csv=1
    if (date && sroScheduleNo?.srO_ID) {
      // Implement Call For SRO Schedule
      setSroItems([
        {
          "srO_ITEM_ID": 17853,
          "srO_ITEM_DESC": "50"
        },
        {
          "srO_ITEM_ID": 17854,
          "srO_ITEM_DESC": "51"
        }
      ])
    }
  }, [date, sroScheduleNo])




  function onSubmit(data: z.infer<typeof PostInvoiceItemSchema>) {
    // dispatch(addItemToInvoice(data))
    const items = parentForm.getValues('items')
    parentForm.setValue('items', [...items, data])
    form.reset()
  }

  return (
    <Card className='my-1 border-r-0 border-l-0 rounded-none shadow-none !rounded-0 text-foreground'>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
              <div className='text-sm text-foreground flex flex-col gap-4'>
                <FormField control={form.control} name="hsCode" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Hs Code</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" role="combobox"
                            className={cn(
                              "justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? lookups.itemCode.find(
                                (it) => it.hS_CODE === field.value
                              )?.hS_CODE
                              : "HS Code"}
                            <ChevronsUpDown className="opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="!w-full p-0 justify-start">
                        <Command>
                          <CommandInput
                            placeholder="Search here..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>None.</CommandEmpty>
                            <CommandGroup>
                              {lookups.itemCode.map((ic) => (
                                <CommandItem
                                  value={ic.hS_CODE}
                                  key={ic.hS_CODE}
                                  onSelect={() => {
                                    field.onChange(ic.hS_CODE)
                                    form.setValue('productDescription', ic.description)
                                  }}
                                >
                                  {ic.hS_CODE}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      ic.hS_CODE === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )} />
                <FormField control={form.control} name="productDescription" render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea className='' placeholder='Description' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>
              <div className='col-span-3'>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-3 items-center'>
                  <FormField control={form.control} name="quantity" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="uoM" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Unit Of Measure</FormLabel>
                      <Select onValueChange={(v) => v ? field.onChange(JSON.parse(v)) : field.onChange(null)} value={field.value ? JSON.stringify(field.value) : ''}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select UOM" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {lookups.uom.map((um) => <SelectItem key={um.description} value={um ? JSON.stringify(um) : ''}>{um.description}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="valueSalesExcludingST" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Price (Excluding GST)</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="fixedNotifiedValueOrRetailPrice" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Retail Price</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="saleType" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Sale Type</FormLabel>
                      <Select onValueChange={(v) => v ? field.onChange(JSON.parse(v)) : field.onChange(null)} value={field.value ? JSON.stringify(field.value) : ''}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {lookups.transTypeCode.map((ttc) => <SelectItem key={ttc.transactioN_DESC} value={ttc ? JSON.stringify(ttc) : ''}>{ttc.transactioN_DESC}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="rate" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Taxt Rate</FormLabel>
                      <Select onValueChange={(v) => v ? field.onChange(JSON.parse(v)) : field.onChange(null)} value={field.value ? JSON.stringify(field.value) : ''}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Rate" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {taxClases.map((ttc) => <SelectItem key={ttc.ratE_DESC} value={ttc ? JSON.stringify(ttc) : ''}>{ttc.ratE_DESC}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="salesTaxApplicable" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Tax Amount</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="salesTaxWithheldAtSource" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>With Holding</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="extraTax" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Extra Tax</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="furtherTax" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Further Tax</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="fedPayable" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Federal Exise Duty</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="sroScheduleNo" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>SRO Item Code</FormLabel>
                      <Select onValueChange={(v) => v ? field.onChange(JSON.parse(v)) : field.onChange(null)} value={field.value ? JSON.stringify(field.value) : ''}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Rate" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sroSchedule.map((ttc) => <SelectItem key={ttc.srO_ID} value={ttc ? JSON.stringify(ttc) : ''}>{ttc.srO_DESC}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="sroItemSerialNo" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>SRO Item Code</FormLabel>
                      <Select onValueChange={(v) => v ? field.onChange(JSON.parse(v)) : field.onChange(null)} value={field.value ? JSON.stringify(field.value) : ''}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Rate" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {sroItems.map((ttc) => <SelectItem key={ttc.srO_ITEM_ID} value={ttc ? JSON.stringify(ttc) : ''}>{ttc.srO_ITEM_DESC}</SelectItem>)}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="discount" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Discount</FormLabel>
                      <FormControl>
                        <Input disabled type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="totalValues" render={({ field }) => (
                    <FormItem className="">
                      <FormLabel>Total Sale</FormLabel>
                      <FormControl>
                        <Input type='number' {...field} placeholder='0.0' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>
            </div>
            <Button>
              Add
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ItemForm;