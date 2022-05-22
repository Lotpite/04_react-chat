import React, { useContext } from 'react';
import { Navbar } from '../styles/Navbar.styled';
import { Context } from '../index';
import { useAuthState } from 'react-firebase-hooks/auth';
import LogOut from './LogOut';
import LogIn from './LogIn';

const Header = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return ( 
        <Navbar>
            {
                user
                ? <LogOut />
                : <h4>Please, login</h4>
            }
        </Navbar>
     )
}
 
export default Header;
