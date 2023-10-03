import React, { useState, useEffect } from 'react';
import './Recipes.css'
import RecipeCard from '../../components/RecipeCard/RecipeCard';
const Recipes = () => {
    const [keyword, setKeyword] = useState('');
    const [recipes, setRecipes] = useState([]);

    const API_KEY = process.env.REACT_APP_EDAMAM_API_KEY;
    const APP_ID = process.env.REACT_APP_EDAMAM_APP_ID;
    const API_ENDPOINT = `https://api.edamam.com/search?q=${keyword}&app_id=${APP_ID}&app_key=${API_KEY}`;

    useEffect(() => {
        if (keyword) {
            // Fetch recipes from Edamam API when keyword changes
            fetch(API_ENDPOINT)
                .then(response => response.json())
                .then(data => {
                    setRecipes(data.hits);
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }, [keyword, API_ENDPOINT]);

    const handleKeywordChange = event => {
        setKeyword(event.target.value);
    };

    return (
        <div className="recipe-search-container">
            <input
                type="text"
                placeholder="Enter a keyword..."
                value={keyword}
                onChange={handleKeywordChange}
            />
            <div className="recipe-cards-container">
                {recipes.map(recipe => (
                    <RecipeCard key={recipe.recipe.label} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;