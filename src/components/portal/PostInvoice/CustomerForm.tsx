import React, { useState } from 'react';
import type { CustomerFormType } from './types';
import { Card, CardContent, CardTitle } from '@/components/elements/card';
import { FormControl, FormField, FormItem, FormLabel } from '@/components/elements/form';
import { Popover, PopoverAnchor } from '@radix-ui/react-popover';
import { Input } from '@/components/elements/input';
import { PopoverContent } from '@/components/elements/popover';
import { Textarea } from '@/components/elements/textarea';

const CustomerForm: React.FC<CustomerFormType> = ({ form }) => {
  const businesName = form?.watch("customer.buyerBusinessName") || "";
  const [isBusinessFocussed, setIsBusinessFocussed] = useState<boolean>(false)


  return (
    <Card className="p-4 border rounded-lg">
      <CardTitle className="text-lg font-semibold text-foreground">Customer Details</CardTitle>
      <CardContent className='p-0'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
          <FormField control={form.control} name="customer.buyerBusinessName" render={({ field }) => (
            <FormItem >
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Customer Business Name</FormLabel>
              <Popover open={!!businesName && isBusinessFocussed}>
                <PopoverAnchor>
                  <FormControl>
                    <Input
                      className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                      placeholder='Customer Business Name'
                      {...field}
                      onFocus={() => setIsBusinessFocussed(true)}
                      onBlur={() => setIsBusinessFocussed(false)}
                    />
                  </FormControl>
                </PopoverAnchor>
                <PopoverContent className="w-full p-0" align="start" onOpenAutoFocus={(e) => e.preventDefault()}>
                  <div className='max-h-60 overflow-y-auto'>
                    <div className='p-2 border-b'>
                      <span className='font-medium text-sm text-foreground'>{businesName}</span>
                      <p className='text-xs text-muted-foreground'>1234567890</p>
                      <p className='text-xs text-muted-foreground'>Customer Address Line 1, City, Country</p>
                    </div>
                    <div className='p-2 border-b'>
                      <span className='font-medium text-sm text-foreground'>{businesName} Pvt Ltd</span>
                      <p className='text-xs text-muted-foreground'>0987654321</p>
                      <p className='text-xs text-muted-foreground'>Another Address Line, City, Country</p>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </FormItem>
          )} />
          <FormField control={form.control} name="customer.buyeRegistrationType" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>First Name</FormLabel>
              <FormControl>
                <Input
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer First Name'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="customer.buyeRegistrationType" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Last Name</FormLabel>
              <FormControl>
                <Input
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer last Name'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="customer.buyerNTNCNIC" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Customer NTN/CNIC</FormLabel>
              <FormControl>
                <Input
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer NTN/CNIC'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="customer.buyerProvince" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Customer Province</FormLabel>
              <FormControl>
                <Input
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer Province'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          <FormField control={form.control} name="customer.buyeRegistrationType" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Customer Registration Type</FormLabel>
              <FormControl>
                <Input
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer Registration Type'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          <div className='md:col-span-3'>
            <FormField control={form.control} name="customer.buyerAddress" render={({ field }) => (
            <FormItem>
              <FormLabel className='mb-1 font-medium text-sm text-foreground'>Customer Address</FormLabel>
              <FormControl>
                <Textarea
                  className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Customer Address'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )} />
          </div>
        </div>
      </CardContent>
    </Card>

  );
};

export default CustomerForm;