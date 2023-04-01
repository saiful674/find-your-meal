import React from 'react';
import Header from './components/Header/Header';
import MealCategory from './components/MealCategory/MealCategory';

const App = () => {
  return (
    <div className='relative'>
      <Header></Header>
     <div className="main-container mx-5 md:mx-10">
     <MealCategory></MealCategory>
     </div>
    </div>
  );
};

export default App;