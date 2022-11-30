import { Component } from 'react';


class SearchBox extends Component {

  render() {
    return (
      <input 
        className={`search-box ${this.props.className}`}
        type="search" 
        placeholder={this.props.placeholder} 
        // this onchange only refers to the onSearchChange method which has already been initialized
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox;