import React from 'react';

export class WalkList extends React.Component {
   
    render() {
        const { walks } = this.props;
        return(
            <table>
                <tr>
                <th>Дата(ДД.ММ.ГГ)</th>
                <th>Пройдено, км</th>
                <th>Действия</th>
                </tr>
                {walks.map((walk) =><tr key={walk.id}><th>{walk.date}</th><th>{walk.km}</th><th><button><span class="material-icons">clear
</span></button></th></tr> )}
                </table>
        );
    }
}
