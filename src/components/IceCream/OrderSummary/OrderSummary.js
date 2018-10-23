import React, { Component } from 'react';
import AuxIce from '../../../hoc/AuxIce/AuxIce';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(iKey => {
                return (
                    <li key={iKey}>
                        <span style={{ textTransform: 'capitalize' }}>{iKey}</span>: {this.props.ingredients[iKey]}
                    </li>);
            });
        return(

            <AuxIce>
                <h3>Your Order</h3>
                <p>An awesome ice cream with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}$</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
                  CANCEL
                </Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>
                  CONTINUE
                </Button>
            </AuxIce>
            
        );
    }
} 

export default OrderSummary;