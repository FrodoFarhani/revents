import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route } from 'react-router-dom';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/User/PeopelDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/Home/HomePage';
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className='main'>
          <Route exact path='/' component={HomePage} />
          <Route path='/events' component={EventDashboard} />
          <Route path='/events/:id' component={EventDetailedPage} />
          <Route path='/people' component={PeopleDashboard} />
          <Route path='/profile/:id' component={UserDetailedPage} />
          <Route path='/settings' component={SettingsDashboard} />
          <Route path='/createEvent' component={EventForm} />
        </Container>
      </div>
    );
  }
}

export default App;
