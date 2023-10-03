import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <ul>
                {recipe.recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeCard;
