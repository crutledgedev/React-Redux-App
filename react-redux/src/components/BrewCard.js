import React from 'react';

const BrewCard = props => {
   console.log('brewcard', props)

  return (
    <div>
      <h3>{props.name}</h3>
      <p>City: {props.city}</p>
      <p>State: {props.state}</p>
      <p>Tele: {props.phone}</p>
    </div>
  )
}

export default BrewCard;