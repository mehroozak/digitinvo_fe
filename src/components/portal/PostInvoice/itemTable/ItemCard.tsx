import React from 'react';
import type { ItemCardType } from './types';
import { Card, CardContent, CardTitle } from '@/components/elements/card';
import { Label } from '@/components/elements/label';
import {Edit, Trash2} from 'lucide-react'

const ItemCard: React.FC<ItemCardType> = ({ item }) => {
    return (
        <Card className='my-1 border-r-0 border-l-0 rounded-none shadow-none !rounded-0'>
            <CardTitle className='content-end px-4 flex flex-row justify-end gap-4 '>
                <Edit size='20' className='text-primary cursor-pointer'/>
                <Trash2 size='20' color='red' className='text-primary cursor-pointer'/>
            </CardTitle>
            <CardContent>
                <div className='grid grid-cols-1 md:grid-cols-4'>
                    <div className='text-sm text-foreground'>
                        <div className='flex flex-row mb-2 items-center'>
                            <Label className='text-sm text-foreground'>HS Code: </Label>
                            <div className='text-xs text-foreground'>({item.hsCode ?? '--'})</div>
                        </div>
                        {item.productDescription}
                    </div>
                    <div className='col-span-3'>
                        <div className='grid grid-cols-2 md:grid-cols-5 gap-3 place-items-start'>
                            <div>
                                <Label className='text-sm text-foreground'>Quantity</Label>
                                <div className='text-xs text-foreground'>{item.quantity ?? '--'}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Unit Of Measure</Label>
                                <div className='text-xs text-foreground'>{item.uoM?.description ?? '--'}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Price (Exc GST)</Label>
                                <div className='text-xs text-foreground'>{item.valueSalesExcludingST}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Retail Price</Label>
                                <div className='text-xs text-foreground'>{item.fixedNotifiedValueOrRetailPrice}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Sales Type</Label>
                                <div className='text-xs text-foreground md:max-w-25'>{item.saleType?.transactioN_DESC ??'--'}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Tax rate</Label>
                                <div className='text-xs text-foreground md:max-w-35'>{item.rate?.ratE_DESC ?? '--'}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Tax Amount</Label>
                                <div className='text-xs text-foreground'>{item.salesTaxApplicable}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Tax With holding</Label>
                                <div className='text-xs text-foreground'>{item.salesTaxWithheldAtSource}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Extra Tax</Label>
                                <div className='text-xs text-foreground'>{item.extraTax}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Further Tax</Label>
                                <div className='text-xs text-foreground'>{item.furtherTax}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Federal Exice Duty</Label>
                                <div className='text-xs text-foreground'>{item.fedPayable}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>SRO Schedule No.</Label>
                                <div className='text-xs text-foreground'>{item.sroScheduleNo}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>SRO Item No.</Label>
                                <div className='text-xs text-foreground'>{item.sroItemSerialNo}</div>
                            </div>
                            <div>
                                <Label className='text-sm text-foreground'>Discount</Label>
                                <div className='text-xs text-foreground'>{item.discount}</div>
                            </div>

                            <div>
                                <Label className='text-sm text-foreground'>Total Sale</Label>
                                <div className='text-xs text-foreground'>{item.totalValues}</div>
                            </div>
                        </div>
                    </div>

                </div>
            </CardContent>
        </Card>
    );
};

export default ItemCard;
