import React from 'react';
import EventDetailHeader from './EventDetailHeader';
import EventDetailInfo from './EventDetailInfo';
import EventDetailChat from './EventDetailChat';
import EventDetailSideBar from './EventDetailSideBar';
import { Grid } from 'semantic-ui-react';

import { connect } from 'react-redux';
const mapStateToProps = (state, ownProps) => {
  //ownProps are the properties belong to this component and you can find it
  // in the browser component section in inspect element
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};
const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailHeader event={event} />
        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailSideBar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapStateToProps)(EventDetailedPage);
