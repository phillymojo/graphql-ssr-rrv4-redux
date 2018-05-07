import React from 'react';
import { withRouter } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';

export class DataLoader extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname != this.props.location.pathname) {
      matchRoutes(this.props.routes, nextProps.location.pathname).forEach(({ route, match }) => {
        if (route.loadData) this.props.dispatch(route.loadData(match))
      })
    }
  }
  render() {
    return this.props.children
  }
}

export const RouteDataLoader = withRouter(DataLoader);
