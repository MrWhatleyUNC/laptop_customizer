import React from 'react'
import slugify from 'slugify';
import Feature from './features'
import FEATURES from './store'

export default function FeaturesList(props){
    const features = Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = FEATURES[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <Feature 
                id= {itemHash}
                item={item}
                feature={feature}
                updateFeature={props.updateFeature}
                USCurrencyFormat={props.USCurrencyFormat}
                state={props.state}
            />
            )
        })
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
            )
    })
    return features
}