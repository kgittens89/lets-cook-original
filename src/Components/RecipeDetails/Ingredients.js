import React from 'react';

function Ingredients({ ingredients }) {
    return (
        <>
                {ingredients.map((ingredient) => {
                    return (
                        <li>{ingredient.original}</li>
                    )
                })}          
        </>
    );
}

export default Ingredients;