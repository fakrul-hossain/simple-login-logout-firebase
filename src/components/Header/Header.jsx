import React from 'react';
import Navbar from './Navbar';

const Header = ({userPhoto}) => {
    return (
        <div>
            <Navbar userPhoto={userPhoto}></Navbar>
        </div>
    );
};

export default Header;