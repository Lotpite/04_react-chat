import React, { useContext } from 'react';
import { Navbar } from '../styles/Navbar.styled';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import { LOGIN_ROUTE } from '../utils/const';
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
                ? <button onClick={() => auth.signOut()}>Log Out</button>
                // ? <LogOut onClick={() => auth.signOut()}/>
                : <Link to={LOGIN_ROUTE}>Log In</Link>
                // : <LogIn />
            }
        </Navbar>
     )
}
 
export default Header;
