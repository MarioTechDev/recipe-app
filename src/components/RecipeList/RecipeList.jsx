import RecipeCard from "../RecipeCard/RecipeCard"
import './RecipeList.css'
const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-cards-container">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.recipe.label} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList