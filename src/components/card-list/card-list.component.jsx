import { Component } from 'react';

class CardList extends Component {
// whenever props change or update, then the component will rerender
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {
          monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))
        }
      </div>
    )
  }
}

export default CardList;
 