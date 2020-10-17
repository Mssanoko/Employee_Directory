import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div 
            header style = {
                styles.headerStyle
            } className="header">
                <h1 style = {styles.headingStyle}>Employee Directory</h1>
                <h6>Start typing the name, phone number, or email of the employee you're looking for below</h6>
            </div>
        )
        
    }
}
const styles = {
    headerStyle: {
        background: "#d8bfd8"
    },
    headingStyle: {
        fontSize: 50
    }
}
