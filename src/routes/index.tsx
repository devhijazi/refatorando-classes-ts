import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';

export const Routes = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
  </Switch>
);
