

"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    };

    const loadMealIdeas = async () => {
        if (ingredient) {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            setMeals(fetchedMeals || []);
        }
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas</h2>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strMeal}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
