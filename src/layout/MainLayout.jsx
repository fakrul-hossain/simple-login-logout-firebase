import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const MainLayout = ({userPhoto}) => {
    return (
        <div>
            <Header userPhoto={userPhoto}></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;