import React from 'react';
import { Drawer } from 'antd';

function Filter(props) {
    return (
        <Drawer
            title="Basic Drawer"
            placement={'left'}
            closable={false}
            // onClose={onClose}
            open={true}
            // key={placement}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    );
}

export default Filter;