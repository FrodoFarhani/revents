import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';

import { connect } from 'react-redux';
//after adding redux
/* const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
}; */

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};
class EventForm extends Component {
  state = {
    event: Object.assign({}, this.props.event)
  };

  // commented after using redux
  /* componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  } */

  // commented after using redux
  /*   componentWillReceiveProps(nextProps) {
    if (this.props.selectedEvent !== nextProps.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  } */

  /*
   this is an example to how to use refs
  onFormSubmit = evn => {
    evn.preventDefault();
    console.log(this.refs.title.value);
  }; */
  onFormSubmit = evn => {
    evn.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      //after adding redux and importing actions for creating actions we found there is no id and image
      //so we need to add these here
      const newEvent = {
        ...this.state.event,
        id: cuid(),
        hostPhotoURL: '/assets/user.png'
      };
      this.props.createEvent(newEvent);
      //after creating event we should redirect user to eventList page
      this.props.history.push('/events');
    }
  };

  onInputChange = evt => {
    const NewEvent = this.state.event;
    NewEvent[evt.target.name] = evt.target.value;

    this.setState({
      event: NewEvent
    });
  };

  render() {
    const { event } = this.state;
    //const { handleCancel } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            {/* <input ref='title' placeholder='Event title' /> */}
            <input
              name='title'
              onChange={this.onInputChange}
              value={event.title}
              placeholder='Event title'
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              name='date'
              onChange={this.onInputChange}
              value={event.date}
              type='date'
              placeholder='Event Date'
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              name='city'
              onChange={this.onInputChange}
              value={event.city}
              placeholder='City event is taking place'
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              name='venue'
              onChange={this.onInputChange}
              value={event.venue}
              placeholder='Enter the Venue of the event'
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              name='hostedBy'
              onChange={this.onInputChange}
              value={event.hostedBy}
              placeholder='Enter the name of person hosting'
            />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          {/*  <Button onClick={handleCancel} type='button'>
            Cancel
          </Button> */}
          <Button onClick={this.props.history.goBack} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(EventForm);
