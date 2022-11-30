import './App.css';
import { Component } from 'react';

class App extends Component {
// classes ALWAYS runs constructor first
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }

  // after render runs, the component then "mounts" which runs this componentDidMount
  componentDidMount() {
    console.log('component')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((users) => this.setState(() => {
        return {monsters: users}
      }, 
        () => {
          console.log(this.state)
        }
      ))
  }

  // when the class is initialized, this method is built 
  onSearchChange = (event) => {
    console.log({startingArray: this.state.monsters})
    // Lowercase search input
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    })
  }

  // the initial render runs after the constructor
  render() {
    console.log('render')

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });

    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monster" 
          // this onchange only refers to the onSearchChange method which has already been initialized
          onChange={this.onSearchChange}
        />
        {
          filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );

  }
}

export default App;
