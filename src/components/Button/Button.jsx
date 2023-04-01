import React from 'react';

const Button = ({children}) => {
    return (
        <div>
            <button className='border rounded border-red px-5 py-2 text-red font-medium hover:text-white hover:bg-red'>{children}</button>
        </div>
    );
};

export default Button;