import React from 'react';

function Instructions({recipeSteps}) {
    return (
        <>
            {recipeSteps.map((step) => {
                return (
                    <li>{step.step}</li>
                )
            })}
        </>
    );
}

export default Instructions;