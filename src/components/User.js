import React, { Component } from 'react';
import { Image, Modal, Button } from 'react-bootstrap';
import UserProfile from './UserProfile';
import './components.css';

class User extends Component {

    constructor() {
        super()
        this.handleShowProfile = this.handleShowProfile.bind(this)
        this.handleClose = this.handleClose.bind(this)

        this.state = {
            showModal: false
        }
    }

    render() {
        return (
            <div>
                <div class='user'>
                    <div class='avatar'><Image src={this.props.user.picture.medium} roundedCircle /></div>
                    <div class='name-surname'><h3>{this.props.user.name.first + ' ' + this.props.user.name.last}</h3></div>
                    <Button variant='primary' onClick={this.handleShowProfile}>Show Profile</Button>
                </div>
                {this.renderUserProfileModal()}
            </div>
        )
    }

    renderUserProfileModal() {
        return (
            <Modal show={this.state.showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <UserProfile user={this.props.user} />
                </Modal.Body>
            </Modal>
        )
    }

    handleShowProfile() {
        this.setState({ showModal: true })
    }

    handleClose() {
        this.setState({ showModal: false })
    }
}

export default User;