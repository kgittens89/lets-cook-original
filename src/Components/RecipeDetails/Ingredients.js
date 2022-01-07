import React from 'react';

function Ingredients({ ingredients }) {
    return (
        <>
                {ingredients.map((ingredient) => {
                    return ( 
                        <li key={ingredient.id}>{ingredient.originalString}</li>
                    )
                })}          
        </>
    );
}

export default Ingredients;