import React, { Component } from 'react';
import './style.scss';

class MealBox extends Component {
  constructor(meal) {
    super();
    this.meal = meal.meal;
  }
  render() {
    return (
      <div className="media">
        <img
          src={this.meal.image}
          alt={this.meal.name}
          className="img-thumbnail mr-3 mw-25 border-0"
          style={{ maxWidth: '10em' }}
        />
        <div className="media-body align-self-center">
          <h5 className="mt-0 mb-1">{this.meal.name}</h5>
          <small>{this.meal.calories}</small>
        </div>
        <form className="row align-self-center">
          <input className="form-control col-9" type="number" value={this.meal.quantity} />
          <button className="btn btn-primary col-3">+</button>
        </form>
      </div>
    );
  }
}

export default MealBox;
