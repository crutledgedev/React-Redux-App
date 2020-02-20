import React from 'react';
import Loader from 'react-loader-spinner';
import BrewCard from './BrewCard';

// redux
import { connect } from 'react-redux';
import { getBeer } from '../actions';

const BrewList = props => {
  // console.log(props);
  return (
    <div>
      <h1>Local Brews</h1>
      {/* {!props.state && !props.isFetching && <p>Go ahead! Fetch a brew!</p>}
      {props.isFetching && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
        />
      )} */}
      {props.state.map(item => (
        <BrewCard 
            key={item.id} 
            name={item.name} 
            city={item.city}
            state={item.state}
            phone={item.phone}
            />
      ))}
      <button onClick={props.getBeer}>List of Breweries!</button>
    </div>
  )
}

const mapStateToProps = state => {
  // console.log(state);
  return{
    state: state.state,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, { getBeer })(BrewList);