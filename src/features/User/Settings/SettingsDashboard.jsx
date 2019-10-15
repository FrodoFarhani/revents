import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './AboutPage';
import AccountPage from './AccountPage';
import PhotoPage from './PhotoPage';
import BasicPage from './BasicPage';

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={13}>
        <Switch>
          <Redirect exact from='/settings' to='/settings/basic' />
          <Route path='/settings/basic' component={BasicPage} />
          <Route path='/settings/about' component={AboutPage} />
          <Route path='/settings/photos' component={PhotoPage} />
          <Route path='/settings/account' component={AccountPage} />
        </Switch>
      </Grid.Column>
      <Grid.Column width={3}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default SettingsDashboard;
