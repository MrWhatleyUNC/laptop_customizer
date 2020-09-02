import React from 'react'
import FeaturesList from './featuresList'

export default function MainForm(props){
return(
    <form className="main__form">
        <h2>Customize your laptop</h2>
        <FeaturesList 
            updateFeature={props.updateFeature}
            USCurrencyFormat={props.USCurrencyFormat}
            state= {props.state}
        />
    </form>
    )
}
