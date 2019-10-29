import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increamentCounter, decreamentCounter } from './testActions';
import { Button } from 'semantic-ui-react';

const mapStateToProps = (state, ownProps) => ({
  //test matches the name that we use in rootReducer
  // data is in our test reducer the initialState for data is 42
  data: state.test.data
});

const actions = {
  increamentCounter,
  decreamentCounter
};
class TestComponent extends Component {
  render() {
    const { increamentCounter, decreamentCounter, data } = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>The answer is :{data}</h3>
        <Button
          onClick={increamentCounter}
          color='green'
          content='Increament'
        />
        <Button onClick={decreamentCounter} color='red' content='Decreament' />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TestComponent);
