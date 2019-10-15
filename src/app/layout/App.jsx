import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import EventForm from '../../features/event/EventForm/EventForm';
import SettingsDashboard from '../../features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import PeopleDashboard from '../../features/User/PeopelDashboard/PeopleDashboard';
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage';
import HomePage from '../../features/Home/HomePage';
class App extends Component {
  /* 
         path / is seperate because we do not want to this page to have navbar
         other paths '/(.+)' would be switched on other route method
          <Switch> returns only one first matching route.
          exact returns any number of routes that match exactly. 
      */
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Route
          path='/(.+)'
          render={() => (
            <div>
              <NavBar />
              <Container className='main'>
                <Switch>
                  <Route path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/profile/:id' component={UserDetailedPage} />
                  <Route path='/settings' component={SettingsDashboard} />
                  <Route path='/createEvent' component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
