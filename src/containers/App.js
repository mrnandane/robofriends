import React, { Component } from 'react';
import { CardList } from '../components/cardlist/CardList';
import { Searchbox } from '../components/searchbox/Searchbox';
import { Scroll } from '../components/scroll/Scroll';
import './App.css';

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
    const { robots, searchString } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchString);
    });
    return !robots.length ? <h1>Loading..</h1> :
      (
        <div className={'tc gradient'}>
          <h1 className={'f1'}>Robots</h1>
          <Searchbox searchChange={this.onSearchKeyChange}/>
          <Scroll>
            <CardList robots={filteredRobots}/>
          </Scroll>
        </div>
      );
    }
};

export default App;