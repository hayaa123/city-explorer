import React, { Component } from 'react'

export class Error extends Component {
    render() {
        return (
            <div>
                <p>{this.props.error}</p>
            </div>
        )
    }
}

export default Error
