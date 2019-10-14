import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const emptyEvent = {
  title: '',
  date: '',
  city: '',
  venue: '',
  hostedBy: ''
};
class EventForm extends Component {
  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedEvent !== nextProps.selectedEvent) {
      this.setState({
        event: nextProps.selectedEvent || emptyEvent
      });
    }
  }

  /*
   this is an example to how to use refs
  onFormSubmit = evn => {
    evn.preventDefault();
    console.log(this.refs.title.value);
  }; */
  onFormSubmit = evn => {
    evn.preventDefault();
    this.props.createEvent(this.state.event);
  };

  state = {
    event: emptyEvent
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
    const { handleCancel } = this.props;
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
          <Button onClick={handleCancel} type='button'>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
