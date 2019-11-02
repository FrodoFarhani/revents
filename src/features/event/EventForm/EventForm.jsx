import React, { Component } from 'react';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import cuid from 'cuid';
import { createEvent, updateEvent } from '../eventActions';

import { connect } from 'react-redux';

import { reduxForm, Field } from 'redux-form';

import TextInput from '../../../app/common/form/TextInput';
import TextArea from '../../../app/common/form/TextArea';
import SelectInput from '../../../app/common/form/SelectInput';
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from 'revalidate';
import DateInput from '../../../app/common/form/DateInput';
import moment from 'moment';
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
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
    //redux form can get initialValues. we will pass it inside our map state func because those initial
    // values it takes as props. this will help us to load data from props when we click manage event.
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: 'drinks', text: 'Drinks', value: 'drinks' },
  { key: 'culture', text: 'Culture', value: 'culture' },
  { key: 'film', text: 'Film', value: 'film' },
  { key: 'food', text: 'Food', value: 'food' },
  { key: 'music', text: 'Music', value: 'music' },
  { key: 'travel', text: 'Travel', value: 'travel' }
];

const validate = combineValidators({
  title: isRequired({ message: 'Event is required' }),
  category: isRequired({ message: 'Category is required' }),
  description: composeValidators(
    isRequired({ message: 'Description is required' }),
    hasLengthGreaterThan(4)({ message: 'HSould be at least 5 character' })
  )(),
  city: isRequired({ message: 'City is required' }),
  venue: isRequired({ message: 'Venue is required' }),
  date: isRequired('Date is require')
});

class EventForm extends Component {
  /*  state = {
    event: Object.assign({}, this.props.event)
  }; */

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
  /* onFormSubmit = evn => {
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
  }; */

  //After adding redux form
  onFormSubmit = values => {
    /**
     * Objects are not valid as a React child, because of this error we should bring moment package here
     * and format our date which comes from our date picker
     */
    values.date = moment(values.date).format();

    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      //after adding redux and importing actions for creating actions we found there is no id and image
      //so we need to add these here
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Bob'
      };
      this.props.createEvent(newEvent);
      //after creating event we should redirect user to eventList page
      this.props.history.push('/events');
    }
  };

  /* onInputChange = evt => {
    const NewEvent = this.state.event;
    NewEvent[evt.target.name] = evt.target.value;

    this.setState({
      event: NewEvent
    });
  }; */

  render() {
    //const { event } = this.state;
    //const { handleCancel } = this.props;
    const { invalid, submiting, pristine } = this.props;
    /** Pristine: if sombody wants to update aform and make no changes then the initial
     * values that we provide is the pristine version of the form
     */
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color='teal' content='Event Details' />
            {/*  <Form onSubmit={this.onFormSubmit}> */}
            {/* we use redux form handle submit to submit our form */}
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              {/*  <Form.Field>
            <label>Event Title</label>
            {// <input ref='title' placeholder='Event title' /> }
            <input
              name='title'
              onChange={this.onInputChange}
              value={event.title}
              placeholder='Event title'
            />
          </Form.Field> */}
              {/* we just remove sementicUI field and add redux form field that has more features for us */}
              {/** if you chaekc it in redux extention in browser you will see it in state tab. by clicking this title textbox
           you can see events fired like focuse or chanching */}

              <Field
                name='title'
                type='text'
                component={TextInput}
                placeholder='Give your event a name'
              />
              <Field
                name='category'
                type='text'
                component={SelectInput}
                options={category}
                placeholder='What is your event about'
                multiple={false}
              />
              <Field
                name='description'
                rows={3}
                type='text'
                component={TextArea}
                placeholder='Tell us about your event'
              />
              <Header sub color='teal' content='Event Location Details' />
              <Field
                name='city'
                type='text'
                component={TextInput}
                placeholder='Event city'
              />
              <Field
                name='venue'
                type='text'
                component={TextInput}
                placeholder='Event venue'
              />
              <Field
                name='date'
                type='text'
                component={DateInput}
                dateFormat='YYYY-MM-DD HH:mm'
                timeFormat='HH:mm'
                showTimeSelect
                placeholder='Event date and time'
              />
              {/* <Form.Field>
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
          </Form.Field> */}
              <Button
                disabled={invalid || submiting || pristine}
                positive
                type='submit'
              >
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
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({ form: 'eventForm', enableReinitialize: true, validate })(
    EventForm
  )
);
// enableReinitialize : this would enable our form initialize when the props change
/**
 * by adding reduxForm to our eventForm page, if you look it into browser there are
 * alot of props added to this form
 */
