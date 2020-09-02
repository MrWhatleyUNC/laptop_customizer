import React from 'react'
import Cart from './cart'
import Total from './total'

export default function Summary(props){
   return (
    <section className="main__summary">
        <h2>Your cart</h2>
        <Cart 
            USCurrencyFormat={props.USCurrencyFormat}
            state= {props.state}
        />
        <Total 
            USCurrencyFormat={props.USCurrencyFormat}
            state= {props.state}
        />
    </section>
   ) 
}