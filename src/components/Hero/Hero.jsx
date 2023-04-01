import React from 'react';
import banner from '../../assets/banner.jpg'
import Button from '../Button/Button';
const Hero = () => {
    return (
        <div className='relative'>
            <img src={banner} alt="" />
            <div className="banner-text absolute w-2/4 text-white top-[25%] px-5 md:px-10">
                <p>WIDE OPTIONS OF CHOICE</p>
                <h1 className='my-5 text-4xl font-bold'>Delicious Recipes</h1>
                <p className='mb-7'>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That's why it's crucial that, as women.</p>
                <Button>Check our menu</Button>
            </div>
        </div>
    );
};

export default Hero;