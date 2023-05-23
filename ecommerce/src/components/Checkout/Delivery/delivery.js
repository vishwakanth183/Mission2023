import { Box, Button, Card, IconButton, Radio, Typography, fabClasses } from '@mui/material';
import React from 'react';
import { appFonts } from '../../../shared/appFonts';
import { appColors } from '../../../shared/appcolors';
import './delivery.scss'
import { Edit, EditLocationAlt, EditLocationAltOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { cartSummary, deliveryToPayment, deliveryToSummary, paymentRoute } from '../../Routing';

function Delivery(props) {

    // variable to handle navigation
    const navigateTo = useNavigate();

    const addressList = [
        {
            firstname: 'M.S',
            lastName: 'Dhoni',
            type: 'Home',
            phno: '7187187187',
            // "Flat / House No. / Floor / Building" : "777",
            // "Colony/Street/Locality" : "1st MS Street , MS Nagar",
            // "Landmark(Optional)" : "Helicopter"
            Flat: "777",
            Colony: "1st MS Street , MS Nagar",
            Landmark: "Helicopter",
            city: 'Ranchi',
            pincode: '627077',
            default: false

        },
        {
            firstname: 'King',
            lastName: 'Kholi',
            type: 'Office',
            phno: '8181718171',
            Flat: "18",
            Colony: "18th King Street , RCB Nagar",
            Landmark: "Cover Drive",
            city: 'Banglore',
            pincode: '628018',
            default: true
        },
        // {
        //     firstname: 'ABD',
        //     lastName: 'Villiers',
        //     type: 'Office',
        //     phno: '8181718171',
        //     Flat: "18",
        //     Colony: "18th King Street , RCB Nagar",
        //     Landmark: "Cover Drive",
        //     city: 'Banglore',
        //     pincode: '628018',
        //     default: false
        // },
        // {
        //     firstname: 'Glenn',
        //     lastName: 'Maxwell',
        //     type: 'Office',
        //     phno: '8181718171',
        //     Flat: "18",
        //     Colony: "18th King Street , RCB Nagar",
        //     Landmark: "Cover Drive",
        //     city: 'Banglore',
        //     pincode: '628018',
        //     default: false
        // },
        // {
        //     firstname: 'Hardik Pandya',
        //     lastName: 'Kholi',
        //     type: 'Office',
        //     phno: '8181718171',
        //     Flat: "18",
        //     Colony: "18th King Street , RCB Nagar",
        //     Landmark: "Cover Drive",
        //     city: 'Banglore',
        //     pincode: '628018',
        //     default: false
        // },
        // {
        //     firstname: 'Faf',
        //     lastName: 'Du plessis',
        //     type: 'Office',
        //     phno: '8181718171',
        //     Flat: "18",
        //     Colony: "18th King Street , RCB Nagar",
        //     Landmark: "Cover Drive",
        //     city: 'Banglore',
        //     pincode: '628018',
        //     default: false
        // }
    ]

    return (
        <div className='deliveryView'>

            <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', color: appColors.violet }} variant='button'>Delivery</Typography>

            <Card style={{ marginTop: 10, paddingTop: 1, paddingBottom: 20 }}>
                <div className='addressListView'>
                    {
                        addressList.map((address, addressIndex) => {
                            return <Card sx={{ marginTop: 1, marginBottom: 1 }}>

                                {/* customer details with edit icon */}
                                <div className='justifyBetweenView alignCenter'>

                                    <div className='addressShortView'>
                                        <Radio checked={address.default} sx={{ padding: 0 }} />
                                        <Typography sx={{ fontFamily: appFonts.montserrat, color: appColors.dark, fontWeight: 'bold', paddingLeft: 1 }} variant='body1'>
                                            {address.firstname} {address.lastName}
                                        </Typography>
                                        <Typography sx={{ fontFamily: appFonts.montserrat, color: appColors.grey, paddingLeft: 1 }} variant='body2'>
                                            ({address.type})
                                        </Typography>
                                    </div>

                                    <div>
                                        <IconButton>
                                            <EditLocationAltOutlined color='secondary' />
                                        </IconButton>
                                    </div>
                                </div>

                                {/* Phno and address details view */}
                                <Box sx={{ paddingLeft: 1.7, paddingBottom: 1 }}>
                                    <Typography sx={{ fontFamily: appFonts.montserrat, color: appColors.dark, paddingTop: 1 }} variant='body1'>
                                        {address.phno}
                                    </Typography>
                                    <Typography sx={{ fontFamily: appFonts.montserrat, color: appColors.grey }} variant='body2'>
                                        {
                                            address.Flat + ',' + address.Colony + ',' + address.Landmark + '-' + address.pincode
                                        }
                                    </Typography>
                                </Box>
                            </Card>
                        })
                    }
                </div>
            </Card>

            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                <Button
                    onClick={() => { navigateTo(deliveryToSummary, { state: {}, replace: false }) }}
                    color='secondary' variant='contained' sx={{ fontFamily: appFonts.montserrat, marginRight: 2 }}>
                    Prev
                </Button>
                <Button
                    onClick={() => { navigateTo(deliveryToPayment, { state: {}, replace: false }) }}
                    color='secondary' variant='contained' sx={{ fontFamily: appFonts.montserrat }}>
                    Next
                </Button>
            </Box>

        </div>
    );
}

export default Delivery;