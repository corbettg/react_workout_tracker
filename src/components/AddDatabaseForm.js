import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, InputGroup, InputGroupAddon } from 'reactstrap'
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
			 let value = event.target.value

			 if (event.target.name === "resourceType") {
			 	 var options = event.target.options; value = []; for (var i = 0, l = options.length; i < l; i++) { if (options[i].selected) { value.push(options[i].value); } }
		 	 }

			 currentDB[name] = value;

			 console.log(currentDB)

			 this.props.dispatch(updateCurrentDatabase(currentDB.id, currentDB.resourceName, currentDB.resourceType, currentDB.link, currentDB.resourceAdvisory,
           currentDB.resourceAdvisoryText, currentDB.shortDescription, currentDB.longDescription, currentDB.coverageDates, currentDB.access, currentDB.vendor))
	 }

	 handleSubmit(event) {
			 event.preventDefault();
			 let action = this.props.currentAction;
			 let currentDB = this.props.currentDatabase
			 console.log(event.target.value)
			 switch (action) {
	       case "Add Database":
						 this.props.dispatch(addDatabase(currentDB.resourceName, currentDB.resourceType, currentDB.link, currentDB.resourceAdvisory, currentDB.resourceAdvisoryText,
							 currentDB.shortDescription, currentDB.longDescription, currentDB.coverageDates, currentDB.access, currentDB.vendor))
						 this.props.dispatch(clearCurrentDatabase())
						 break
	       case "Save Changes":
						 this.props.dispatch(editDatabase(currentDB.id, currentDB.resourceName, currentDB.resourceType, currentDB.link, currentDB.resourceAdvisory, currentDB.resourceAdvisoryText,
							 currentDB.shortDescription, currentDB.longDescription, currentDB.coverageDates, currentDB.access, currentDB.vendor))
						 this.props.dispatch(clearCurrentDatabase())
						 this.props.dispatch(updateCurrentAction("Add Database"))
						 break
	       default:
	           break
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
							 <Label for="text">Resource Name</Label>
							 <Input id="resourceName" type="text" required name="resourceName" value={this.props.currentDatabase.resourceName} onChange={this.handleChange.bind(this)}/>
						 </FormGroup>

						 <FormGroup>
						 	 <Label for="resourceType">Resource Type</Label>
 						   <Input type="select" name="resourceType" id="resourceType" value={this.props.currentDatabase.resourceType} multiple onChange={this.handleChange.bind(this)}>
							 	 <option>None</option>
 							   <option>Article Database</option>
 							   <option>Videos</option>
								 <option>eAudio Collection</option>
								 <option>eBook Collection</option>
								 <option>General Reference</option>
								 <option>Images</option>
								 <option>Newspaper Resources</option>
								 <option>Online Collections</option>
								 <option>Primary Sources (Historical)</option>
								 <option>Data and Statistics</option>
								 <option>Trial</option>
								 <option>Website</option>
								 <option>Other</option>
 						   </Input>
 					  </FormGroup>

						<FormGroup>
							<Label for="link">Link</Label> (Check checkbox to add proxy)
							<InputGroup>
								<InputGroupAddon>
									<Input addon type="checkbox" />
								</InputGroupAddon>
								<Input id="link" type="text" required name="link" value={this.props.currentDatabase.link} onChange={this.handleChange.bind(this)}/>
							</InputGroup>
						</FormGroup>

						<FormGroup>
							<Label for="resourceAdvisory">Resource Advisory</Label>
							<Input type="select" name="resourceAdvisory" id="resourceAdvisory" value={this.props.currentDatabase.resourceAdvisory} onChange={this.handleChange.bind(this)}>
								<option>None</option>
								<option>New</option>
								<option>Trial Database</option>
							</Input>
					  </FormGroup>

						<FormGroup>
							<Label for="resourceAdvisoryText">Resource Advisory Text</Label>
							<Input id="resourceAdvisoryText" type="textarea" rows="2" required name="resourceAdvisoryText" value={this.props.currentDatabase.resourceAdvisoryText} onChange={this.handleChange.bind(this)} />
						 </FormGroup>

						 <FormGroup>
							 <Label for="shortDescription">Short Description</Label>
							 <Input id="shortDescription" type="textarea" rows="4" required name="shortDescription" value={this.props.currentDatabase.shortDescription} onChange={this.handleChange.bind(this)} />
						 </FormGroup>

						 <FormGroup>
							 <Label for="longDescription">Long Description</Label>
							 <Input id="longDescription" type="textarea" rows="8" required name="longDescription" value={this.props.currentDatabase.longDescription} onChange={this.handleChange.bind(this)} />
						 </FormGroup>

						 <FormGroup>
							 <Label for="text">Coverage Dates</Label>
							 <Input id="coverageDates" type="text" required name="coverageDates" value={this.props.currentDatabase.coverageDates} onChange={this.handleChange.bind(this)}/>
						 </FormGroup>

						 <FormGroup>
							 <Label for="access">Access</Label>
							 <Input type="select" name="access" id="access" value={this.props.currentDatabase.access} onChange={this.handleChange.bind(this)}>
								 <option>Free</option>
								 <option>UNCW</option>
							 </Input>
					   </FormGroup>

						 <FormGroup>
							 <Label for="text">Vendor</Label>
							 <Input id="vendor" type="text" required name="vendor" value={this.props.currentDatabase.vendor} onChange={this.handleChange.bind(this)}/>
						 </FormGroup>

						 <Button color={this.props.currentAction === "Save Changes" ? "success" : "primary"}>{this.props.currentAction ? this.props.currentAction: "Add Database"}</Button>
						 {this.props.currentAction === "Save Changes" ?  <Button color="danger" onClick={() => this.removeDatabase(this.props.currentDatabase.id)}>Delete Database</Button> : null}
					</Form>
			</div>
		)
	}
}

export default connect(mapStateToProps)(AddDatabaseForm)
