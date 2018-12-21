import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Layout
import Header from './layout/Header';
import Footer from './layout/Footer';

// Components
import Home from './containers/Home';
import NotFound from './components/NotFound';
import SingleNews from './containers/SingleNews';
import SingleMovies from './containers/SingleMovies';
import SingleBooks from './containers/SingleBooks';

class App extends Component {
  state = {
    mode: 'dark'
  }

  toggleMode = () => {
    this.setState(state => {
      let newMode = state.mode === 'dark' ? 'light' : 'dark';
      return {
        mode: newMode
      }
    })
  }

  render() {    
    return (
      <BrowserRouter>
        <div className={`bg-${this.state.mode}`}>
          <Header mode={this.state.mode} toggle={() => this.toggleMode()} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news/:id" component={SingleNews} />
            <Route path="/movies/:id" component={SingleMovies} />
            <Route path="/books/:id" component={SingleBooks} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
