import { PostInvoiceSchema } from '@/components/portal/PostInvoice/schemas';
import { useAppSelector } from '@/hooks/redux';
import { organizationLogo, organizationState } from '@/store/slices/OrganizationSlice';
import { INVOICE_TYPES, REGISTRATION_TYPES } from '@/utils/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import type z from 'zod';
import moment from 'moment';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/elements/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/elements/popover';
import { Button } from '@/components/elements/button';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/elements/command';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/elements/calendar';
import { Input } from '@/components/elements/input';
import Benificiary from '@/components/portal/PostInvoice/Benificiary';
import CustomerForm from '@/components/portal/PostInvoice/CustomerForm';
import ItemTable from '@/components/portal/PostInvoice/itemTable/ItemTable';

const PostInvoice: React.FC = () => {
  const logo = useAppSelector(organizationLogo);
  const org = useAppSelector(organizationState);

  const invoiceTypes = [
    { label: INVOICE_TYPES.SALES, value: INVOICE_TYPES.SALES },
    { label: INVOICE_TYPES.DEBIT, value: INVOICE_TYPES.DEBIT },
  ]
  const organization = useAppSelector(organizationState);
  const form = useForm<z.infer<typeof PostInvoiceSchema>>({
    resolver: zodResolver(PostInvoiceSchema),
    defaultValues: {
      refNo: '',
      invoiceType: INVOICE_TYPES.SALES,
      invoiceDate: moment().format('YYYY-MM-DD'),
      sellerNTNCNIC: organization?.ntn || '',
      sellerBusinessName: organization?.name || '',
      sellerAddress: organization?.address || '',
      sellerProvince: organization?.province || '',
      customer: {
        buyerNTNCNIC: '',
        buyerBusinessName: '',
        buyerAddress: '',
        buyerProvince: '',
        buyeRegistrationType: REGISTRATION_TYPES.UN_REGISTERED,
      },
      items: [],
    },
  })
  const formVals = form.watch();
  console.log(form.watch())



  function onSubmit(data: z.infer<typeof PostInvoiceSchema>) {
    console.log("Form submitted with data:", data)
  }

  return (
    <div className='border-1 rounded-2xl h-screen'>
      {/* Header */}
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='flex flex-row gap-2'>
              <img className='max-h-20 max-w-35' src={logo?.url} alt="Organization Logo" />
              <div className='flex flex-col py-3'>
                <span className='text-lg font-semibold'>{org?.name}</span>
                <span className='text-sm'>{org?.description}</span>
              </div>
            </div>
            <span className='text-xl font-semibold items-center text-center'>INVOICE</span>
            <div className='items-end flex justify-end'>
              <img className='max-h-20 max-w-35' src={logo?.url} alt="Organization Logo" />
            </div>
          </div>
          {/* Base Info */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-2'>
            <FormField control={form.control} name="invoiceType" render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Invoice Type</FormLabel>
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
                          ? invoiceTypes.find(
                            (it) => it.value === field.value
                          )?.label
                          : "Select Type"}
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
                          {invoiceTypes.map((language) => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => { field.onChange(language.value) }}
                            >
                              {language.label}
                              <Check
                                className={cn(
                                  "ml-auto",
                                  language.value === field.value
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
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="invoiceDate" render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Invoice Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          moment(field.value).format("YYYY-MM-DD")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={moment(field.value).toDate()}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1999-01-01")
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )} />
            <FormField control={form.control} name="refNo" render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Reference Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Ref No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-2'>
            <Benificiary form={form} />
            <CustomerForm form={form} />
          </div>
          {formVals.invoiceDate && formVals.customer.buyerBusinessName && <div className='grid grid-cols-1 p-2'>
            <span className='text-lg font-semibold'>Subject: {formVals.invoiceType} to {formVals.customer.buyerBusinessName}</span>
          </div>}
          <div className='px-2 overflow-x-auto'> 
            <ItemTable form={form} />
          </div>

        </form>
      </Form>
    </div>
  );
};

export default PostInvoice;