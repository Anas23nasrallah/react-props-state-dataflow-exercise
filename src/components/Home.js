import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
        const store = this.props.data
        return(
            this.props.discount ? store.map(i => <Item price={i.price * (1 - i.discount)} name={i.item} key={i.item} />) : 
            store.map(i => <Item price={i.price} name={i.item} key={i.item} />)
        )
    }
}

export default Home