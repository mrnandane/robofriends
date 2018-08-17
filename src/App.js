import React, { Component } from 'react';
import { CardList } from './cardlist/CardList';
import { Searchbox } from './searchbox/Searchbox';
import {robots} from './robots';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchString: ''
    }
  }
  onSearchKeyChange = (event) => {
    this.setState({
      searchString: event.target.value
    });
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchString);
    })

    return (
      <div className={'tc gradient'}>
        <h1 className={'f1'}>Robots</h1>
        <Searchbox searchChange={this.onSearchKeyChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
};

export default App;