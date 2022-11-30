import './App.css';
import { Component } from 'react';

class App extends Component {
// classes ALWAYS runs constructor first
  constructor() {
    super();

    this.state = {
      monsters: []
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

  // the initial render runs after the constructor
  render() {
    console.log('render')
    return (
      <div className="App">
        <input 
          className="search-box" 
          type="search" 
          placeholder="Search Monster" 
          onChange={(event) => {
            // Lowercase search input
            const searchInput = event.target.value.toLocaleLowerCase();

            // Filter monsters array that match search Input
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchInput)
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            })
          }}
        />
        {
          this.state.monsters.map((monster) => {
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
