import React from 'react';

import classes from './BurgerIngredient.css';

const burgerIngredient = (props) => {
   let ingredient = null;

   switch (props.type) {
   	  case('bread-bottom'):
   	    ingredient = <div className={classes.BreadBottom></div>;
   	    break;
      case('bread-top'):
        ingredient = (
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
        	);

   }
};

export default burgerIngredient;