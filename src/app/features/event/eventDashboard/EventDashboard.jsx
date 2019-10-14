import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
export default class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}></Grid.Column>
        <Grid.Column width={6}>
          <Button positive content='Create Event' />
          <EventForm />
        </Grid.Column>
      </Grid>
    );
  }
}
