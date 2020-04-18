import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './components.css';

class UserProfile extends Component {

    render() {
        return (
            <div>
                <div class='card'>
                    <div><Image src={this.props.user.picture.large} rounded /></div>
                    <h1>{this.props.user.name.first + ' ' + this.props.user.name.last}</h1>
                    <p class='title'>{this.props.user.email}</p>
                    <p>{this.props.user.location.country}</p>
                </div>
            </div>
        )
    }
}

export default UserProfile;