import React, { useEffect, useState } from 'react';
import './Stepper.scss'
import { Route, Routes, useLocation } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { appColors } from '../../../shared/appcolors';
import { StepButton, Typography } from '@mui/material';
import { appFonts } from '../../../shared/appFonts';
import CartSummary from '../CartSummary/cartSummary';
import Cart from '../Cart/cart';
import Delivery from '../Delivery/delivery';
import { cartDelivery, cartSummary, deliveryToSummary, summaryToDelivery } from '../../Routing';


function StepperComponent(props) {

    // Variable to handle route location
    const routeLocation = useLocation()

    // Variable to handle  stepper current position
    const [activeStepper, setCurrentStepper] = useState(0);

    // List of stepper lables
    const lables = [
        {
            name: "Cart",
            icon: (completed) => { return <ShoppingBasketIcon htmlColor={completed ? appColors.lightGreen : appColors.grey} /> }
        },

        {
            name: "Delivery",
            icon: (completed) => { return <DeliveryDiningIcon htmlColor={completed ? appColors.lightGreen : appColors.grey} /> }
        },
        {
            name: "Payment",
            icon: (completed) => { return <CurrencyRupeeIcon htmlColor={completed ? appColors.lightGreen : appColors.grey} /> }
        }
    ]

    // Variable to handle onChange stepper
    const onChangeStepper = (value) => {
        console.log("Val", value)
        setCurrentStepper(value);
    };

    useEffect(() => {
        if (routeLocation) {
            // console.log("routeLocation.state", routeLocation)
            if (routeLocation.pathname == deliveryToSummary) {
                setCurrentStepper(0);
            }
            else if (routeLocation.pathname == summaryToDelivery) {
                setCurrentStepper(1);
            }
            else {
                setCurrentStepper(2);
            }
        }
    }, [routeLocation])

    return (
        <div className='stepperFullView'>

            {/* left scetion */}
            <div className='leftView'>
                <Cart />
            </div>

            {/* Right Section */}
            <div className='rightView'>

                {/* Stepper section */}
                <Stepper nonLinear activeStep={activeStepper}>
                    {
                        lables.map((item, currentIndex) => {
                            return <Step key={currentIndex} completed={currentIndex <= activeStepper}>
                                <StepButton disabled icon={item.icon(currentIndex <= activeStepper)} color="inherit" onClick={() => onChangeStepper(currentIndex)}>
                                    <Typography sx={{ fontFamily: appFonts.montserrat, fontWeight: 'bold', color: currentIndex <= activeStepper ? appColors.lightGreen : appColors.grey }} variant="body2">
                                        {item.name}
                                    </Typography>
                                </StepButton>
                            </Step>
                        })
                    }
                </Stepper>

                <div>
                    <Routes>
                        <Route path='summary' element={<CartSummary />} />
                        <Route path='delivery' element={<Delivery />} />
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default StepperComponent;