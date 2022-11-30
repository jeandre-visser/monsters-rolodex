import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';

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
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monster" 
          // this onchange only refers to the onSearchChange method which has already been initialized
          onChange={onSearchChange}
        />
        {/*
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })*/
        }
        <CardList monsters={'I am a monster'} />
      </div>
    );
  }
}

export default App;
