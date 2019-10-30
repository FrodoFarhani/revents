/**
 * befor this component when we go to any component the page scroll was not at the
 * top, so it was a bad UX for user so we copy this code from https://reacttraining.com/react-router/web/guides/scroll-restoration
 * to fix this issue
 */
import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
