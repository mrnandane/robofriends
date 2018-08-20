import React, { Component } from 'react';
import { CardList } from './cardlist/CardList';
import { Searchbox } from './searchbox/Searchbox';
import { Scroll } from './scroll/Scroll';
import './App.css';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchString: ''
    }
  }

  // to hold reference of this we will use ES6 syntax here for function
  onSearchKeyChange = (event) => {
    this.setState({
      searchString: event.target.value
    });
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() }).then(users => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchString);
    });
    /* NOTE : to test our error boundary we need to throw a error manually..
     only in development mode it will appear as error but on production mode,
     it will just render whatever is returned from render function in case of error */
    if (filteredRobots.length === 5) {
      throw new Error('I am crashed..');
    }
    if (this.state.robots.length < 1) {
      return <h1>Loading..</h1>
    }
    else {
      return (
        <div className={'tc gradient'}>
          <h1 className={'f1'}>Robots</h1>
          <Searchbox searchChange={this.onSearchKeyChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </ErrorBoundary>
        </div>
      );
    }
  }
};

export default App;