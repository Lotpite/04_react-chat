import React, { useContext } from 'react';
import { Navbar } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { LOGIN_ROUTE } from '../utils/const';
import { useAuthState } from 'react-firebase-hooks/auth';
import LogOut from './LogOut';
import LogIn from './LogIn';
import { LogoutButton } from '../styles/Logout.styled';

const Header = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return ( 
        <Navbar>
            {
                user
                ? <LogoutButton onClick={() => auth.signOut()}>X</LogoutButton>
                // ? <LogOut onClick={() => auth.signOut()}/>
                : <Link to={LOGIN_ROUTE}></Link>
                // : <LogIn />
            }
        </Navbar>
     )
}
 
export default Header;
