import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import WalkModel from './WalkModel';


export class Form extends React.Component {
    static propTypes = {
    onAdd:PropTypes.func.isRequired
    };
    state = {
        date:"",
        km: 0,
    };

    handleSubmit = event => {
        event.preventDefault();
        const walk = new WalkModel(nanoid(), this.state.date, parseInt(this.state.km));
        this.props.onAdd(walk);
        this.setState({date:"", km:0});
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor="date">Дата(ДД.ММ.ГГ)</label>
                <input name="date" id="date" type="date" onChange={this.handleChange} />
              </div>
              <div>
                <label htmlFor="km">Пройдено, км</label>
                <input name="km" id="km" type="text" onChange={this.handleChange} />
              </div>
              <input type="submit" value="ОК" />
            </form>
        );
    }
}

