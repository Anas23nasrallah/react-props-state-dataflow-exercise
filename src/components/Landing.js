import React, { Component } from 'react';

class Landing extends Component {


    render() {
        

        return (
            <div>
                <div>
                    welcome {this.props.user}
                </div>
                <div>
                    the hottest is: {this.props.store.find(i => i.hottest).item}
                </div>
            </div>

        )

    }
}

export default Landing