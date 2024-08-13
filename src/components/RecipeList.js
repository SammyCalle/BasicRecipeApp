import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { fetchRecipes } from "../utils/api";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchRecipeData = async () => {
            const data = await fetchRecipes(query);
            setRecipes(data);
        };
        fetchRecipeData();
    }, [query]);

    const handleSearch = (event) => {
        setQuery(event.target.value);
    }

    return (
        <div>
            <input type="text" value={query} onChange={handleSearch} />
            <div className="recipe-list">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.recipe.label} recipe={recipe} />
                ))}
            </div>
        </div>
    );  
};

export default RecipeList;