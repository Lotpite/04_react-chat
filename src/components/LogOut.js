import { React, useContext } from 'react';
import { Context } from '..';
import { LogoutButton } from '../styles/Logout.styled';

const LogOut = () => {
  const {auth} = useContext(Context)

    return ( 
        <LogoutButton onClick={() => auth.signOut()}>X</LogoutButton>
     );
}
 
export default LogOut;