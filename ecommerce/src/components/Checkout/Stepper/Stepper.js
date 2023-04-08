import React, { useState } from 'react';
import './Stepper.scss'
import { Route, Routes } from 'react-router-dom';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { appColors } from '../../../shared/appcolors';
import { StepButton, Typography } from '@mui/material';
import { appFonts } from '../../../shared/appFonts';
// import CartSummary from '../CartSummary/cartSummary';


function StepperComponent(props) {

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
    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrentStepper(value);
    };

    return (
        <div className='stepperFullView'>

            {/* left scetion */}
            <div className='leftView'>

            </div>

            {/* Right Section */}
            <div className='rightView'>

                {/* Stepper section */}
                <Stepper nonLinear activeStep={activeStepper} onChange={onChange}>
                    {
                        lables.map((item, currentIndex) => {
                            return <Step key={currentIndex} completed={currentIndex <= activeStepper}>
                                <StepButton icon={item.icon(currentIndex <= activeStepper)} color="inherit" sx={{ fontFamily: 'cursive' }} className='stepperButton'>
                                    <Typography sx={{fontFamily : appFonts.montserrat}} variant="caption">{item.name}</Typography>
                                </StepButton>
                            </Step>
                        })
                    }
                </Stepper>

                <div>
                    <Routes>
                        {/* <Route path=':cart' element={<CartSummary />} /> */}
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default StepperComponent;