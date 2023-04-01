import React from 'react';
import Button from '../Button/Button';

const SingleMealCategory = ({ singleMealCategory, handleSeeDishs }) => {
    const {strCategory,strCategoryDescription,strCategoryThumb,idCategory} = singleMealCategory
    return (
        <div>
            <div className="card bg-base-100 shadow-lg">
                <figure><img className='w-full rounded-md bg-center' src={strCategoryThumb} alt="Shoes" /></figure>
                <div className="card-body h-60">
                    <h2 className="card-title">{strCategory}</h2>
                    <p>{strCategoryDescription.slice(0,100)}... <a href="#" className='text-red'>read more</a></p>
                    <div className="card-actions">
                       <span onClick={()=> handleSeeDishs(strCategory)}><Button>See Dishs</Button></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleMealCategory;