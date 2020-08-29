import React from 'react'
import slugify from 'slugify';


export default function Feature(props){
    return (
        <div key={props.id} className="feature__item">
          <input
            type="radio"
            id={props.id}
            className="feature__option"
            name={slugify(props.feature)}
            checked={props.item.name === props.state.selected[props.feature].name}
            onChange={e => props.updateFeature(props.feature, props.item)}
          />
          <label htmlFor={props.id} className="feature__label">
            {props.item.name} ({props.USCurrencyFormat.format(props.item.cost)})
          </label>
        </div>
    )
}