import React from 'react';

function Instructions({recipeSteps}) {
    return (
        <>
            {recipeSteps[0].map((step) => {
                return (
                    <li>{step.step}</li>
                )
            })}
        </>
    );
}

export default Instructions;