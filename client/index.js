import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/App';
import PageNotFound from './containers/PageNotFoundContainer';

Meteor.startup(() => {
  render(
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
});