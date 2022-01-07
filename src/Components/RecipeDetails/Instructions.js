import React from 'react';

function Instructions({ recipeSteps }) {

    return (
        <>
            {recipeSteps.map((step) => {
                return (
                    <li key={step.number}>{step.step}</li>
                )
            })}
        </>
    );
}

export default Instructions;