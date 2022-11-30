import { Component } from 'react';

class CardList extends Component {
// whenever props change or update, then the component will rerender
  render() {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {
          monsters.map((monster) => {
            const { name, email, id } = monster;
            return (
              <div className='card-container' key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2 key={id}>{name}</h2>
                <p>{email}</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default CardList;
 