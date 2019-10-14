import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
];

class EventDashboard extends Component {
  //React recommened it to use constructor and super
  //but because of too many code we should write to bind each method, we decided
  // to use arrow functions in definding them, so we do not need constructor anymore.
  // constructor(props) {
  //  super(props);
  //this.state = {
  state = {
    events: eventsDashboard,
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

    const updatedEvent = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvent,
      isOpen: false
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
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            onEventEdit={this.handelEditEvents}
            events={this.state.events}
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

export default EventDashboard;
