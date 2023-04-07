import React, { useState } from 'react';
import { SolutionOutlined, ShoppingCartOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { GrLocation } from 'react-icons/gr'
import { FaShippingFast } from 'react-icons/fa'
import { Steps } from 'antd';
import './Stepper.scss'
import { Route, Routes } from 'react-router-dom';
import CartSummary from '../CartSummary/cartSummary';

function Stepper(props) {

    const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <div className='stepperFullView'>

            {/* left scetion */}
            <div className='leftView'>

            </div>

            {/* Right Section */}
            <div className='rightView'>

                {/* Stepper section */}
                <Steps
                    current={current}
                    onChange={onChange}
                    className='stepperView'
                    items={[
                        {
                            title: 'Cart',
                            // status: 'finish',
                            icon: <ShoppingCartOutlined />,
                        },
                        {
                            title: 'Delivery',
                            // status: 'wait',
                            icon: <FaShippingFast size={20} />
                        },
                        {
                            title: 'Pay',
                            // status: 'wait',
                            icon: <DollarCircleOutlined />,
                        },
                    ]}
                />

                <div>
                    <Routes>
                        <Route path=':cart' element={<CartSummary />} />
                    </Routes>
                </div>

            </div>

        </div>
    );
}

export default Stepper;