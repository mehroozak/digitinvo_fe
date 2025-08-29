import React from 'react';
import type { BenificiaryType } from './types';
import { Card, CardContent, CardTitle } from '@/components/elements/card';

const Benificiary: React.FC<BenificiaryType> = ({ form }) => {
  return (
    <Card className="p-4 border rounded-lg">
      <CardTitle className="text-lg font-semibold text-foreground">Benificiary Details</CardTitle>
      <CardContent className='px-0'>
        <div className='flex flex-col'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <span className='text-sm text-foreground font-semibold'>Business Name</span>
            <span className='text-sm text-foreground'>{form?.getValues('sellerBusinessName')}</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <span className='text-sm text-foreground font-semibold'>NTN/CNIC</span>
            <span className='text-sm text-foreground'>{form?.getValues('sellerNTNCNIC')}</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <span className='text-sm text-foreground font-semibold'>Address</span>
            <span className='text-sm text-foreground'>{form?.getValues('sellerAddress')}</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <span className='text-sm text-foreground font-semibold'>Province</span>
            <span className='text-sm text-foreground lowercase'>{form?.getValues('sellerProvince')?.stateProvinceDesc ?? ''}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Benificiary;