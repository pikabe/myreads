import React, { Component } from 'react';

class SelectShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {value:this.props.currentShelf};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.changeShelf(this.props.book, event.target.value);
  }
  render(){
    console.log(this.props.changeShelf);
    return(

      <select value={this.state.value} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>

    );

  }
}

export default SelectShelf
