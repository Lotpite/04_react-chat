import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { Context } from '../index';
import { LoginBlock, LoginButton } from '../styles/Login.styled';

const LogIn = () => {
    const {auth} = useContext(Context);

    const signin = async () => {
        const provider = new GoogleAuthProvider()
        await signInWithPopup(auth, provider)
    }
    
    return ( 
            <LoginBlock>
                    <LoginButton onClick={signin}>Get Started</LoginButton>
            </LoginBlock>
            
     );
}
 
export default LogIn;