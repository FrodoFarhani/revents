import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => ({
  //test matches the name that we use in rootReducer
  // data is in our test reducer the initialState for data is 42
  data: state.test.data
});
class TestComponent extends Component {
  render() {
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is :{this.props.data}</h3>
      </div>
    );
  }
}

export default connect(mapStateToProps)(TestComponent);
