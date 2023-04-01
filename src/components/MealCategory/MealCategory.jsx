import React, { useEffect, useState } from 'react';
import SingleMealCategory from '../SingleMealCategory/SingleMealCategory';

const MealCategory = () => {
    const [mealCategory, setMealCategory] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=> setMealCategory(data.categories))
    },[]);
    // filter category to remove pork items
    const filterData = mealCategory.filter(data => data.strCategory !== 'Pork');

    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl text-pink font-bold mb-5'>Pick Your Favorite Category</h1>
           <div className="mealCategory-container grid md:grid-cols-3 gap-5">
           {
                filterData.map(singleMealCategory => <SingleMealCategory key={singleMealCategory.idCategory} singleMealCategory={singleMealCategory}></SingleMealCategory>)
            }
           </div>
        </div>
    );
};

export default MealCategory;