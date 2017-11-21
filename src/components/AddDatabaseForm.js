import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { connect } from 'react-redux'
import { addDatabase, editDatabase, removeDatabase, updateCurrentDatabase, clearCurrentDatabase, updateCurrentAction } from '../actions'

const mapStateToProps = state => {
  return { currentDatabase: state.currentDatabase, currentAction: state.currentAction }
}


class AddDatabaseForm extends Component {

	handleChange(event) {
			 event.preventDefault();
			 let currentDB = this.props.currentDatabase
			 let name = event.target.name;
			 let value = event.target.value;
			 currentDB[name] = value;

			 this.props.dispatch(updateCurrentDatabase(
				 currentDB.id, currentDB.title, currentDB.link, currentDB.proxy, currentDB.advisory, currentDB.description
			 ))
	 }

	 handleSubmit(event) {
			 event.preventDefault();
			 let action = this.props.currentAction;
			 let currentDB = this.props.currentDatabase
			 console.log(event.target.value)
			 switch (action) {
	       case "Add Database":
						 this.props.dispatch(addDatabase(currentDB.title, currentDB.link, currentDB.proxy, currentDB.advisory, currentDB.description))
						 this.props.dispatch(clearCurrentDatabase())
						 break
	       case "Save Changes":
						 this.props.dispatch(editDatabase(currentDB.id, currentDB.title, currentDB.link, currentDB.proxy, currentDB.advisory, currentDB.description))
						 this.props.dispatch(clearCurrentDatabase())
						 this.props.dispatch(updateCurrentAction("Add Database"))
						 break
	       default:
	           "Error"
	     }
	 }

	 removeDatabase(id) {
				this.props.dispatch(removeDatabase(id))
				this.props.dispatch(clearCurrentDatabase())
				this.props.dispatch(updateCurrentAction("Add Database"))
		}

	render() {
		return (
			<div className = "add-database-form">
				<h2>Add Database Form</h2><hr/>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						 <FormGroup>
							 <Label for="text">Title</Label>
							 <Input id="title" type="text" required name="title" value={this.props.currentDatabase.title} onChange={this.handleChange.bind(this)}/>
						 </FormGroup>
						 <FormGroup>
							 <Label for="link">Link</Label>
							 <Input id="link" type="text" required name="link" value={this.props.currentDatabase.link} onChange={this.handleChange.bind(this)}/>
						 </FormGroup>

						<FormGroup>
						<Label for="proxy">Add Proxy</Label>
						 <Input type="select" name="proxy" id="proxy" onChange={this.handleChange.bind(this)}>
							 <option>No</option>
							 <option>Yes</option>
						 </Input>
					 </FormGroup>
						<FormGroup>
							<Label for="advisory">Advisory</Label>
							<Input id="advisory" type="textarea" rows="4" required name="advisory" value={this.props.currentDatabase.advisory} onChange={this.handleChange.bind(this)} />
						</FormGroup>
						 <FormGroup>
							 <Label for="description">Description</Label>
							 <Input id="description" type="textarea" rows="10" required name="description" value={this.props.currentDatabase.description} onChange={this.handleChange.bind(this)} />
						 </FormGroup>
						 <Button color={this.props.currentAction === "Save Changes" ? "success" : "primary"}>{this.props.currentAction ? this.props.currentAction: "Add Database"}</Button>
						 {this.props.currentAction === "Save Changes" ?  <Button color="danger" onClick={() => this.removeDatabase(this.props.currentDatabase.id)}>Delete Database</Button> : null}
					</Form>
			</div>
		)
	}
}

export default connect(mapStateToProps)(AddDatabaseForm)
