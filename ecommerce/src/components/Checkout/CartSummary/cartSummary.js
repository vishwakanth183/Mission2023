import React from 'react';
import { Box, Button, Chip, Divider, FormControl, FormControlLabel, Input, InputAdornment, InputLabel, Radio, Typography } from '@mui/material';
import { CurrencyRupee } from '@mui/icons-material';
import './cartSummary.scss'
import { appFonts } from '../../../shared/appFonts';
import { appColors } from '../../../shared/appcolors';
import { useNavigate } from 'react-router-dom';
import { cartDelivery, cartRoute, summaryToDelivery } from '../../Routing';

function CartSummary(props) {

    // Variable to handle navigation
    const navigateTo = useNavigate();

    // Shipping type variable
    const ShippingTypes = [
        {
            type: 'Free shipping',
            isSelected: false,
            isDisabled: true
        },
        {
            type: 'Shipping fee ₹80',
            isSelected: true,
            isDisabled: false
        },
        {
            type: 'Shipping fee ₹130',
            isSelected: false,
            isDisabled: true
        }
    ];

    return (
        <div className='cartSummaryView'>
            <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', color: appColors.violet }} variant='button'>Cart Summary</Typography>

            <div className='mediumTopPadding'>

                <div className='justifyBetweenView'>
                    <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold' }} variant='body2'>Bag Total</Typography>
                    <Typography sx={{ fontFamily: appFonts.montserrat }} variant='body2'>₹2,766.00</Typography>
                </div>

                <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

                <div className='justifyBetweenView'>
                    <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold' }} variant='body2'>Bag Discount</Typography>
                    <Typography sx={{ fontFamily: appFonts.montserrat }} variant='body2'>-₹150.00</Typography>
                </div>

                <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

                <div className='justifyBetweenView'>
                    <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold' }} variant='body2'>Estimated VAT/SCT</Typography>
                    <Typography sx={{ fontFamily: appFonts.montserrat }} variant='body2'>₹88.00</Typography>
                </div>

                <Divider sx={{ marginTop: 1, marginBottom: 1 }} />

                <div className='justifyBetweenView'>
                    <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold' }} variant='body2'>Delivery</Typography>
                    <Typography sx={{ fontFamily: appFonts.montserrat, display: 'flex', alignItems: 'center' }} variant='body2'>₹400.00</Typography>
                </div>

                <div className='couponView'>
                    <FormControl fullWidth variant="standard">
                        <InputLabel sx={{ fontFamily: appFonts.montserrat }}>Coupon</InputLabel>
                        <Input
                            type={'text'}
                            sx={{ fontFamily: appFonts.montserrat }}
                            placeholder='Enter coupon code'
                            endAdornment={
                                <Button sx={{ fontFamily: appFonts.montserrat, bottom: 5, color: appColors.light, backgroundColor: appColors.dark }}>Apply</Button>
                            }
                        />
                    </FormControl>
                </div>

            </div>

            <div className='mediumTopPadding'>
                <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', color: appColors.violet }} variant='button'>Shipping</Typography>
                <div className='margingTopMedium columnView'>
                    {
                        ShippingTypes.map((shippingItem, index) => {
                            return <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                <Radio disabled={shippingItem.isDisabled} sx={{ paddingLeft: 0 }} checked={shippingItem.isSelected} />
                                <Typography sx={{ fontFamily: appFonts.montserrat, color: shippingItem.isDisabled ? appColors.grey : appColors.dark }} variant='body2'>{shippingItem.type}</Typography>
                            </Box>
                        })
                    }
                </div>
            </div>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginTop: 10 }}>
                <Button
                    onClick={() => { navigateTo(summaryToDelivery, { state: {}, replace: false }) }}
                    color='secondary' variant='contained' sx={{ fontFamily: appFonts.montserrat }}
                >
                    Next
                </Button>
            </Box>

        </div>
    );
}

export default CartSummary;