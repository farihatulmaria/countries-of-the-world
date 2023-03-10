import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
const Main = () => {
    return (
        <div className='h-max'>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Main;
