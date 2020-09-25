import React from 'react';
import PropTypes from 'prop-types';

export class WalkList extends React.Component {
  static propTypes = {
    walks:PropTypes.array.isRequired,
    removeWalk:PropTypes.func.isRequired
  };
 
  render() {
    const { walks, removeWalk } = this.props;
    return(
        <table>
          <tr>
            <th>Дата(ДД.ММ.ГГ)</th>
            <th>Пройдено, км</th>
            <th>Действия</th>
          </tr>
          {walks.sort((a,b) => new Date(a.date) - new Date(b.date))
                 .map((walk) =>
          <tr key={walk.id}>
            <td>{walk.date}</td>
            <td>{walk.km}</td>
            <td>
              <button onClick={() => removeWalk(walk.date)}>
                <span>✗</span>
              </button>
            </td>
          </tr>
                 )}
        </table>
    );
  }
}
