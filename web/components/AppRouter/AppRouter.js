import Home from 'pages/Home';
import Login from 'pages/Login';
import Try from 'pages/Try/Try'
const { Fragment } = React;
const { BrowserRouter , HashRouter, Route, } = ReactRouter;
console.log(IS_DEV)
const Router = IS_DEV ?  HashRouter: BrowserRouter;

export default class AppRouter extends React.Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/try" component={Try} />
          </Fragment>
        </Router>
      </Fragment>
    );
  }
}
