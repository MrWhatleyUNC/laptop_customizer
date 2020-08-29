import React from 'react'

export default function CartItem(props){
    return (
        <div className="summary__option" key={props.id}>
          <div className="summary__option__label">{props.feature} </div>
          <div className="summary__option__value">{props.selectedOption.name}</div>
          <div className="summary__option__cost">
            {props.USCurrencyFormat.format(props.selectedOption.cost)}
          </div>
        </div>
      )
}