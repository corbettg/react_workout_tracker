import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class AddDatabaseForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
				 formValues: {title: '', link: '', proxy: false, advisory: '', description: ''}
		 }

		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
			 event.preventDefault();
			 let formValues = this.state.formValues;
			 let name = event.target.name;
			 let value = name === 'proxy' ? event.target.checked : event.target.value;

			 formValues[name] = value;

			 this.setState({formValues})
			 console.log(this.state.formValues);
	 }

	 handleSubmit(event) {
			 event.preventDefault();
			 console.log(this.state.formValues);
	 }

	render() {
		return (

			<Form onSubmit={this.handleSubmit.bind(this)}>
				 <FormGroup>
					 <Label for="text">Title</Label>
					 <Input id="title" type="text" required name="title" value={this.state.formValues["title"]} onChange={this.handleChange.bind(this)}/>
				 </FormGroup>
				 <FormGroup>
					 <Label for="link">Link</Label>
					 <Input id="link" type="text" required name="link" value={this.state.formValues["link"]} onChange={this.handleChange.bind(this)}/>
				 </FormGroup>
				 <FormGroup check>
					<Label check>
						<Input type="checkbox" name="proxy" checked={this.state.formValues["proxy"]} onChange={this.handleChange.bind(this)}/>
						Add Proxy
					</Label>
				</FormGroup>
				<FormGroup>
					<Label for="advisory">Advisory</Label>
					<Input id="advisory" type="textarea" rows="3" required name="advisory" value={this.state.formValues["advisory"]} onChange={this.handleChange.bind(this)} />
				</FormGroup>
				 <FormGroup>
					 <Label for="description">Description</Label>
					 <Input id="description" type="textarea" rows="6" required name="description" value={this.state.formValues["description"]} onChange={this.handleChange.bind(this)} />
				 </FormGroup>
				 <Button color="primary">Submit</Button>
			</Form>
		)
	}
}
