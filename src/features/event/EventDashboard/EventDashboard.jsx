import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

import { connect } from 'react-redux';
import { createEvent, updateEvent, deleteEvent } from '../eventActions';

const actions = { createEvent, updateEvent, deleteEvent };
const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events
  };
};

class EventDashboard extends Component {
  //React recommened it to use constructor and super
  //but because of too many code we should write to bind each method, we decided
  // to use arrow functions in definding them, so we do not need constructor anymore.
  // constructor(props) {
  //  super(props);
  //this.state = {
  state = {
    // events: eventsDashboard,// after adding redux
    isOpen: false,
    selectedEvent: null
  };

  //to use handleFormOpen function with this keyword we
  // need to add this line in our constructor
  //this.handleFormOpen = this.handleFormOpen.bind(this);
  //}
  /** instead of binging the method in constructor we use arrow fuction here
   * this will do the same
   */
  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleCancel = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvents = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = './assets/user.png';

    //const updatedEvent = [...this.state.events, newEvent];// commented after redux
    this.props.createEvent(newEvent);
    this.setState({
      //events: updatedEvent,// commented after redux
      isOpen: false
    });
  };
  handelDeleteEvent = eventId => () => {
    /* const updatedEvent = this.state.events.filter(e => e.id !== eventid);
    this.setState({
      events: updatedEvent
    }); */
    this.props.deleteEvent(eventId);
  };
  handelUpdateEvent = updateEvent => {
    this.props.updateEvent(updateEvent);
    this.setState({
      // events: this.state.events.map(event => {
      //   if (event.id === updateEvent.id) {
      //     /**
      //      * This would copy our updateEvent into empty object and assign it to what we are replacing it with
      //      */
      //     return Object.assign({}, updateEvent);
      //   } else {
      //     return event;
      //   }
      // }),
      isOpen: false,
      selectedEvent: null
    });
  };
  handelEditEvents = editedEvent => () => {
    this.setState({
      selectedEvent: editedEvent,
      isOpen: true
    });
  };
  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventDelete={this.handelDeleteEvent}
            onEventEdit={this.handelEditEvents}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            onClick={this.handleFormOpen}
            /**
             * we can write it like this to pass somthing by presing the btn or not to write
             * arrow function in method but this is not the best way because it has performance
             * issues. this means every time the component rerenders the function would be created!
             * instead of this way we can add another arrow fuction before the one we have, so our method would e like this:
             *  handleFormOpen =(str)=> () => {
                  conslole.log(str)
                };
                this would work with this:
                onClick={this.handleFormOpen('some string')} 
             */
            // onClick={()=>this.handleFormOpen('some string')}
            positive
            content='Create Event'
          />
          {this.state.isOpen && (
            <EventForm
              updateEvent={this.handelUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvents}
              handleCancel={this.handleCancel}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(EventDashboard);
