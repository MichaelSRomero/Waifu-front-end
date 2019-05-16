import React from 'react';
import MatchCard from './MatchCard';


class MatchList extends React.Component {
  createMatchCards = () => {
    return this.props.matches.map(user => <MatchCard
        key={user.id}
        user={user}
        handleClick={this.props.handleClick}/>)
  }

  render() {
    return (
      <div className="detail-list">
        {this.createMatchCards()}
      </div>
    )
  }
}

export default MatchList;
