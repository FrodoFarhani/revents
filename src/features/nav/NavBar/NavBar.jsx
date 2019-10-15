import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenue from '../Menus/SignedInMenue';

/**
 *  withRouter is a function that takes a component and returns a new component
 */
class NavBar extends Component {
  state = {
    authenticated: false
  };
  handleSignIn = () => {
    this.setState({
      authenticated: true
    });
  };
  handleSignOut = () => {
    this.setState({
      authenticated: false
    });
    /**
     * if we use this without withRouter we would get error, because NavBar does not have
     * any Routing props, so we use withRouter to give this component routing pwoer and props
     */
    this.props.history.push('/');
  };
  render() {
    const { authenticated } = this.state;
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <img src='/assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item as={NavLink} to='/events' name='Events' />
          {authenticated && (
            <Menu.Item as={NavLink} to='/people' name='People' />
          )}
          {authenticated && (
            <Menu.Item>
              <Button
                as={Link}
                to='createEvent'
                floated='right'
                positive
                inverted
                content='Create Event'
              />
            </Menu.Item>
          )}
          {authenticated ? (
            <SignedInMenue signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

/** we pass Navbar as parameter to withRouter then when this function executes it  will retun us NavBar with Routing
 * Power and functionality. We will use these higher order components in redux and other packages as well.
 * The important concept is these functions would take a component (like NavBar) as a parameter and after executation
 * they will return that component with extra features.
 */
export default withRouter(NavBar);
