import React from 'react';

import classes from './IceCream.css';
import IceCreamIngredient from './IceCreamIngredient/IceCreamIngredient';

const IceCream = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
        return [...Array(props.ingredients[ingKey])]
        .map((_, i) => {
            return <IceCreamIngredient 
            key={ingKey + i}
            type={ingKey} />;
        });
    })
    .reduce((arr, elem) => {
        return arr.concat(elem);
    }, []);
    
    console.log(props);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding your ice cream ingredients</p>;
    }

    // console.log(transformedIngredients);
    
    return(
        <div className={classes.IceCream}>
            <IceCreamIngredient type='ice-cream-top'/>
            {transformedIngredients}
            <IceCreamIngredient type='ice-cream-bottom' />

        </div>
    );
} 

export default IceCream;