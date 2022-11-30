import { Component } from 'react';

class CardList extends Component {
// whenever props change or update, then the component will rerender
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {
          monsters.map((monster) => (
            <div className='card-container' key={monster.id}>
            <img alt={`monster ${monster.name}`} src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>
            </div>
          ))
        }
      </div>
    )
  }
}

export default CardList;
 