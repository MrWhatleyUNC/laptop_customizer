import React from 'react';
import Item from './cart-item'

export default function Cart(props){
    const summary = Object.keys(props.state.selected).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const selectedOption = props.state.selected[feature];
  
        return (
          <Item 
            key={featureHash}
            id={featureHash}
            feature={feature}
            selectedOption={selectedOption}
            USCurrencyFormat={props.USCurrencyFormat}
          />
        );
    });
    return summary
}