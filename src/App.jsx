import React from 'react';
import Header from './components/Header/Header';
import MealCategory from './components/MealCategory/MealCategory';
import Hero from './components/Hero/Hero';

const App = () => {
  const handleSeeDishs = dishName =>{
    console.log(dishName)
  }
  return (
    <div className='relative'>
      <Header></Header>
      <Hero></Hero>
     <div className="main-container mx-5 md:mx-10">
     <MealCategory handleSeeDishs={handleSeeDishs}></MealCategory>
     </div>
    </div>
  );
};

export default App;