import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex-col flex justify-center items-center h-[100vh]'>
            <h2 className='  text-4xl font-bold text-green-500'>Address Not Round</h2>
            <button className='font-semibold mt-3 bg-red-500 text-white px-3 py-2 rounded-md'>
                <NavLink to='/'>
                    Goto Home
                </NavLink>
            </button>
        </div>
    );
};

export default Error;