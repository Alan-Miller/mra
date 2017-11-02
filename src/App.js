import React from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import StarWarsData from './StarWarsData';
import StarWarsViewer from './StarWarsViewer';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(_ => {
      // const counter = this.state.counter + 1;
      // this.setState({
      //   counter
      // })
      this.setState((prev, props) => ({ counter: prev.counter + 1 }))
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    // console.log('App history', this.props.history)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MRA</h1>
          <Link to="/"><div>HOME</div></Link>
          <Link to="/data"><div>DATA</div></Link>
          <Link to="/viewer"><div>VIEWER</div></Link>
        </header>

        <Timer counter={this.state.counter} />

        <Switch>
          <Route path="/data" component={StarWarsData} />
          <Route path="/viewer" component={StarWarsViewer} />
        </Switch>

      </div>
    );
  }
}

export default withRouter(App);
