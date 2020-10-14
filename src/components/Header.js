import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <h6>Start typing the name, phone number, or email of the employee you're looking for below</h6>
            </div>
        )
    }
}