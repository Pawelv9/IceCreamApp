import React from 'react'
import iceCreamLogo from '../../ice-assets/images/ice-cream-logo.png';
import classes from './Logo.css';

const Logo = props => (
  <div className={classes.Logo}>
    <img src={iceCreamLogo} alt='MyIceCream' />
  </div>
);
export default Logo;
