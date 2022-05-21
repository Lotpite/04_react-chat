import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { Component, useContext } from 'react';
import { Context } from '../index';
import { ChatArea } from '../styles/Chat.styled';
import { LoginBlock, LoginButton } from '../styles/Login.styled';

const LogIn = () => {
    const {auth, firestore, app} = useContext(Context);

    const signin = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user
        })

    }
    
    return ( 
            <LoginBlock>
                    <LoginButton onClick={signin}>Get Started</LoginButton>
            </LoginBlock>
            
     );
}
 
export default LogIn;