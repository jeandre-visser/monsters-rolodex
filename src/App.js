import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
// classes ALWAYS runs constructor first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }

  }

  // after render runs, the component then "mounts" which runs this componentDidMount
  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      // whenever setState is called, render is called
      .then((users) => this.setState(() => {
        return {monsters: users}
      }
      ))
  }

  // when the class is initialized, this method is built and passed into the input onchange handler which is better than rerendering an anonymous function
  onSearchChange = (event) => {

    // Lowercase search input
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  // the initial render runs after the constructor
  render() {


    // Use destructuring to remove this and this.state from variables
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    return (
      <div className="App">
        <SearchBox 
          className='monsters-search-box'
          onChangeHandler={onSearchChange} 
          placeholder='Search Monster'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
