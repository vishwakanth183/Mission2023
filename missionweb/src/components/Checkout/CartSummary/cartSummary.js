import { Button, Divider, Input, Space } from 'antd';
import React from 'react';
import './cartSummary.scss'

function CartSummary(props) {
    return (
        <div className='cartSummaryView'>
            <div className='titleText'>Cart Summary</div>

            <div className='mediumTopPadding'>

                <div className='justifyBetweenView'>
                    <div className='leftText'>Bag Total</div>
                    <div className='rightText'>Rs. 2,766</div>
                </div>

                <Divider className='summaryDivider' />

                <div className='justifyBetweenView'>
                    <div className='leftText'>Bag Discount</div>
                    <div className='rightText'>-Rs. 150</div>
                </div>

                <Divider className='summaryDivider' />

                <div className='justifyBetweenView'>
                    <div className='leftText'>Estimated VAT/SCT</div>
                    <div className='rightText'>Rs. 88</div>
                </div>

                <Divider className='summaryDivider' />

                <div className='justifyBetweenView'>
                    <div className='leftText'>Delivery</div>
                    <div className='rightText'>Rs. 400</div>
                </div>

                <div className='couponView'>
                    <Space.Compact style={{ width: '100%' }}>
                        <Input placeholder='Enter Coupon Code' />
                        <Button type='ghost' className='applyCoupon'>APPLY</Button>
                    </Space.Compact>
                </div>

            </div>

        </div>
    );
}

export default CartSummary;