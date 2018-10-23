import React, { Component } from 'react';
import classes from './IceCreamIngredient.css';
import PropTypes from 'prop-types';

class IceCreamIngredient extends Component {
    render() {
        let ingredient = null;

        switch(this.props.type) {
            case ( 'ice-cream-bottom' ): 
                ingredient = <div className={classes.IceCreamBottom}></div>
            break;
            case ( 'ice-cream-top' ):
                ingredient = ( 
                    <div className={classes.IceCreamTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
            break;
            case ( 'strawberry' ):
                ingredient = <div className={classes.Strawberry}></div>
            break;
            case ( 'lemon' ):
                ingredient = <div className={classes.Lemon}></div>
            break;
            case ( 'ocean' ):
                ingredient = <div className={classes.Ocean}></div>
            break;
            case ( 'blackberry' ):
                ingredient = <div className={classes.Blackberry}></div>
            break;
            default: ingredient = null;
        }
        return ingredient;
    };

}
                        
IceCreamIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default IceCreamIngredient;