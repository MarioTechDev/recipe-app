import React from 'react';
import './RecipeCard.css'
const RecipeCard = ({ recipe }) => {
    return (
        <>
            <div className="card">
                <div className="card_image">
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                </div>
                <div className="card_content">
                    <h2 className="card_title">{recipe.recipe.label}</h2>
                    <div className="card_text">
                        <ul>
                            {recipe.recipe.ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};

export default RecipeCard;
