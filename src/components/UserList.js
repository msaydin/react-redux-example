import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Form, Row, Col } from 'react-bootstrap';
import User from './User';
import { UserActions } from '../models/User/actions';

class UserList extends Component {

    constructor() {
        super()
        this.onSearchInputChange = this.onSearchInputChange.bind(this)
        this.getFilteredUsers = this.getFilteredUsers.bind(this)

        this.state = {
            users: null
        }
    }

    componentWillMount() {
        const { getUsers } = this.props
        getUsers()
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.userStore !== nextProps.userStore) {
            this.setState({
                users: nextProps.userStore.users
            })
        }
    }

    onSearchInputChange(event) {
        const { userStore } = this.props
        if (event.target.value) {
            this.getFilteredUsers(event.target.value)
        } else {
            this.setState({ users: userStore.users })
        }
    }

    getFilteredUsers(searchString) {
        const { userStore } = this.props
        var filteredUsers = userStore.users.filter(function (item) {
            return item.name.first.match(searchString) || item.name.last.match(searchString)
        })
        this.setState({ users: filteredUsers })
    }

    render() {
        const { userStore } = this.props
        if(userStore.requested) {
            return (
                <div>Loading users</div>
            )
        }

        return (
            <div>
                {this.state.users ? (
                    <div>
                        <Container>
                            <Row className='justify-content-md-center'>
                                <Col md={{ span: 4 }}>
                                    <Form.Control type='text' id='searchInput' placeholder='Search for Users' onChange={this.onSearchInputChange} />
                                </Col>

                            </Row>
                            {this.state.users.map(currentUser => (
                                <Row className='justify-content-md-center'>
                                    <User user={currentUser} />
                                </Row>
                            ))}
                        </Container>
                    </div>
                ) : 'No users found'}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userStore: state.toJS().userStore
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUsers: UserActions.fetchUsers
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);