import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='border rounded border-pink px-5 py-2 text-pink font-medium hover:text-white hover:bg-pink'>{children}</button>
        </div>
    );
};

export default Button;