import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { firebaseApp } from './firebaseInitialize';
import { getMessaging, getToken } from 'firebase/messaging'
import { webpushcertificate } from './firebaseConfig';

function FirebaseTest(props) {

    const messaging = getMessaging(firebaseApp)

    const getDeviceToken = () => {
        Notification.requestPermission().then((permission) => {
            console.log('Permission granted', permission);
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                getToken(messaging, { vapidKey: webpushcertificate }).then((res) => {
                    console.log("Token res", res);
                }).catch((err) => {
                    console.log("Token err", err)
                })
            }
        }).catch((err) => {
            console.log("Permission Error", err)
        })
    }


    return (
        <Button variant='outlined' style={{ margin: 50 }} onClick={() => getDeviceToken()}>
            Firebase get token
        </Button>
    );
}

export default FirebaseTest;