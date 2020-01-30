import React, { Component } from 'react';
import { CardList } from '../components/cardlist/CardList';
import { Searchbox } from '../components/searchbox/Searchbox';
import { Scroll } from '../components/scroll/Scroll';
import './App.css';
import ErrorBoundary from '../ErrorBoundary';
import { connect } from 'react-redux';
import {updateSearchField} from '../actions';

const mapStateToProps = (state) => {
  return {
    searchString: state.searchString
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
      onSearchKeyChange: (event) => {
        return dispatch(updateSearchField(event.target.value))
      }
    }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => { return response.json() }).then(users => this.setState({ robots: users }));
  }

  render() {
    const { robots } = this.state;
    const { searchString, onSearchKeyChange } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchString);
    });
    /* NOTE : to test our error boundary we need to throw a error manually..
     only in development mode it will appear as error but on production mode,
     it will just render whatever is returned from render function in case of error */
    if (filteredRobots.length === 5) {
      throw new Error('I am crashed..');
    }
    return !robots.length ? <h1>Loading..</h1> :
      (
        <div className={'tc gradient'}>
          <h1 className={'f1'}>Robots</h1>
          <Searchbox searchChange={onSearchKeyChange}/>
          <ErrorBoundary>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </ErrorBoundary>
        </div>
      );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);