import React, { Component } from 'react';

export default class Send extends Component  {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
            <input type= 'submit' name="Submit" value="Send" />
            </div>
        );
    }
}