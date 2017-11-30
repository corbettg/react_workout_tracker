import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert  } from 'reactstrap';
import { connect } from 'react-redux'
import { displayModal, updateUserInfo, clearUserInfo } from '../actions'

const mapStateToProps = (state) => {
  return { modal: state.modal, user: state.user }
}

class LoginModel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: false
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.props.dispatch(displayModal(!this.props.modal))
    this.setState({password: ''})
  }

  handleChange(event) {
    event.preventDefault();
    if( event.target.name === "password") { this.setState({ password: event.target.value}) }
    else { this.props.dispatch(updateUserInfo( event.target.value, false, "")) }
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch('https://libapps.uncw.edu/databases/authenticate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.props.user.username,
        password: this.state.password,
      })
    })
    .then((response) => response.json())
    .then((data) => {
      this.props.dispatch(updateUserInfo( this.props.user.username, data.success, data.token))
      this.props.dispatch(displayModal(!this.props.modal))
      this.setState({password: ''})
    })
    .catch(err => { this.setState({error: true}) });
  }

  logout() {
    this.props.dispatch(clearUserInfo())
  }

  render() {
    return (
        <div>
        {this.props.user.isLoggedIn ?
        <Button color="danger" onClick={this.logout}>LOGOUT</Button>
        : <Button color="default" onClick={this.toggle}>LOGIN</Button> }

          <Modal isOpen={this.props.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              {this.state.error ? <Alert color="danger">Error! Please Enter Correct Username and Password</Alert> : null}
              Login to Create, Edit, and Delete Resources
            </ModalHeader>
            <ModalBody>
              <Form onSubmit={this.handleSubmit.bind(this)}>

                 <FormGroup>
                   <Label for="text">Username</Label>
                   <Input id="username" type="text" required name="username" value={this.props.user.username} onChange={this.handleChange}/>
                 </FormGroup>
                 <FormGroup>
                   <Label for="text">Password</Label>
                   <Input id="password" type="password" required name="password" value={this.state.password} onChange={this.handleChange}/>
                 </FormGroup>
                 <Button color="success">Login</Button>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
    );
  }
}

export default connect(mapStateToProps)(LoginModel)
