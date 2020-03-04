import React, { Component } from 'react';
import './style.scss';

class AddMeal extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      calories: 0,
      image: '',
      show: false
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  toggleShow() {
    this.setState(previousState => ({
      show: !previousState.show
    }));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  }

  submitForm() {
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };
    console.log(newMeal);
    this.props.callbackFromApp(newMeal);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Add Meal</button>
        {this.state.show && (
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Number of calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={this.state.image}
              onChange={this.handleInputChange}
            />

            <button>Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default AddMeal;
