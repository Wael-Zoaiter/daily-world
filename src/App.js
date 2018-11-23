import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Components
import Home from './components/Home';
import Artist from './components/Artist';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wi-bg-main">
          <Route path="*" component={Header} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/artist/:id" component={Artist} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Route path="*" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
