import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increamentCounter, decreamentCounter } from './testActions';
import { Button, Icon } from 'semantic-ui-react';

import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';

import GoogleMapReact from 'google-map-react';

const mapStateToProps = (state, ownProps) => ({
  //test matches the name that we use in rootReducer
  // data is in our test reducer the initialState for data is 42
  data: state.test.data
});

const actions = {
  increamentCounter,
  decreamentCounter
};

const Marker = () => <Icon name='marker' size='big' color='red' />;
class TestComponent extends Component {
  state = {
    address: '',
    scriptLoaded: false
  };
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  handleScriptLoad = () => {
    this.setState({ scriptLoaded: true });
  };
  handleFormSubmit = event => {
    event.preventDefault();

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };
  onChange = address => this.setState({ address });
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange
    };
    const { increamentCounter, decreamentCounter, data } = this.props;
    return (
      <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyDn6mwVKAIRNfNOQwZ24k-OimkRzDTC_Iw&libraries=places'
          onLoad={this.handleScriptLoad}
        />
        <h1>Test Area</h1>
        <h3>The answer is :{data}</h3>
        <Button
          onClick={increamentCounter}
          color='green'
          content='Increament'
        />
        <Button onClick={decreamentCounter} color='red' content='Decreament' />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded && (
            <PlacesAutocomplete inputProps={inputProps} />
          )}
          <button type='submit'>Submit</button>
        </form>
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDn6mwVKAIRNfNOQwZ24k-OimkRzDTC_Iw'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker lat={59.955413} lng={30.337844} text='My Marker' />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
