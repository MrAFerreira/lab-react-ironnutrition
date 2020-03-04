import React, { Component } from 'react';
import './App.scss';
import MealBox from './Components/MealBox';
import AddMeal from './Components/AddMeal';

import meals from './meals';

class App extends Component {
  constructor(meals) {
    super();
    this.state = {
      meals: meals
    };
  }

  addNewMeal = newMeal => {
    console.log(newMeal);

    this.setState({
      meals: [...this.state.meals, newMeal]
    });
  };

  render() {
    return (
      <div className="App">
        <AddMeal callbackFromApp={meal => this.addNewMeal(meal)} />
        {meals.map(meal => (
          <MealBox meal={meal} />
        ))}
      </div>
    );
  }
}

export default App;
