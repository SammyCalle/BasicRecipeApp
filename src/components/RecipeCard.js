import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className='recipe-card'>
            <h3>{recipe.recipe.label}</h3>
            <img src={recipe.recipe.image} alt = {recipe.recipe.label} />
        </div>
    );
};

export default RecipeCard;