import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <div>{this.props.name}        price: {this.props.price}  </div>
        )

    }
}

export default Item