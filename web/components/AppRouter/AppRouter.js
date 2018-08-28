import Home from 'pages/Home';
import Login from 'pages/Login';

const { Fragment } = React;
const { BrowserRouter, HashRouter, Route } = ReactRouter;
const Router = IS_DEV ? HashRouter : BrowserRouter;

export default class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}
