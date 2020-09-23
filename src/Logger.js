import React from 'react';

import { Form } from './Form';
import { WalkList } from './WalkList'

export class Logger extends React.Component {
    state = {
        walks: [],
    };

handleAdd = walk => {
    this.setState({walks:[ walk, ...this.state.walks]});
}

removeWalk = date => {
    this.setState(this.state.walks.filter(walk => walk.date !== date));
}
    render() {
        return (
            <>
                <Form onAdd={this.handleAdd}  />
                <WalkList walks = {this.state.walks} />
             </>
        );
    }
}
