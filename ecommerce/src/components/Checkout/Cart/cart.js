import { Box, Button, ButtonGroup, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { appFonts } from '../../../shared/appFonts';

import './cart.scss'
import { appColors } from '../../../shared/appcolors';

function Cart(props) {

    // Variable to handle cart items
    const cartItems = [
        {
            name: "Men's polo shirt full hand",
            variant: "size (M) , color (red)",
            price: 800,
            shippingDate: '12th April',
            quantity: 2,
            img: "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Men's polo shirt full hand",
            variant: "size (M) , color (red)",
            price: 800,
            shippingDate: '12th April',
            quantity: 2,
            img: "https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Men's polo shirt full hand",
            variant: "size (M) , color (red)",
            price: 800,
            shippingDate: '12th April',
            quantity: 2,
            img: "https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            name: "Men's polo shirt full hand",
            variant: "size (M) , color (red)",
            price: 800,
            shippingDate: '12th April',
            quantity: 2,
            img: "https://images.pexels.com/photos/1129019/pexels-photo-1129019.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]

    return (
        <Box>
            <Stack sx={{ padding: 2 }} spacing={5}>
                {
                    cartItems.map((item, index) => {
                        return <Card key={index} sx={{ display: 'flex', flexDirection: 'row', padding: 2 }}>
                            <img src={item.img} className='cartImg' />
                            <div className='fullWidth'>
                                <div className='justifyBetweenView'>
                                    <Typography variant='body1' sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', paddingLeft: 3 }}>{item.name}</Typography>
                                    <Typography variant='body1' sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', paddingLeft: 3, color: appColors.violet }}>₹{Number(item.price).toFixed(2)}</Typography>
                                </div>
                                <Typography variant='body2' sx={{ fontFamily: appFonts.montserrat, paddingLeft: 3 }}>{item.variant}</Typography>
                                <div className='instructionButton'>
                                    <Typography variant='caption' sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', paddingLeft: 3, textDecoration: 'underline', color: appColors.violet }}>Add Instructions</Typography>
                                </div>
                                <div className='columnView'>
                                    <Typography variant='caption' sx={{ fontFamily: appFonts.montserrat, paddingLeft: 3 }}>Expected Shipping Date : {item.shippingDate}</Typography>
                                    <ButtonGroup variant="contained" sx={{ marginLeft: 2, marginTop: 2, border: 1, borderColor: appColors.borderColor }}>
                                        <Button variant='contained'>-</Button>
                                        <Button variant='contained' sx={{ display: 'flex', borderColor: '#ddd', fontFamily: appFonts.montserrat }}>{item.quantity}</Button>
                                        <Button variant='contained'>+</Button>
                                    </ButtonGroup>
                                </div>
                            </div>
                        </Card>
                    })
                }
            </Stack>
        </Box>
    );
}

export default Cart;