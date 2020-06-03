import React, { Component } from 'react';

class Hudini extends Component {
    constructor() {
        super()
        this.state = {
            show: false
        }
    }
    render() {
        return (
            this.state.show ? <div>yes you see</div> : <div>No</div>
        )
    }
}

export default Hudini