import React, { Component } from 'react';
import { FormGroup, Label, Input, ListGroup, ListGroupItem, Button } from 'reactstrap'
import C from '../constants'
import { allDatabases } from '../initialState'
import '../App.css'

class DatabaseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
         letter: 'a',
         //this variable will eventually be replaced with the data from the API
         databases: allDatabases,
         databaseList: 'Select a letter above to see a list of databases'
     }

     this.updateDatabaseList = this.updateDatabaseList.bind(this);
  }

  updateDatabaseList(event) {
      event.preventDefault();
      let letter = event.target.value;
      var colorToUse = 'default'

      var databaseList = this.state.databases.map(function(database, index) {

          if (letter.toLowerCase() === database.title[0].toLowerCase()) {
              colorToUse === 'default' ? colorToUse = 'info' : colorToUse = 'default'
              return <ListGroupItem key={database.id} color={colorToUse} className = "right"><span className = "left">{database.title}</span>
                        <span><Button color={colorToUse}>Edit</Button></span></ListGroupItem>;
            }
      })

      this.setState({databaseList})
  }

  render() {
    console.log(Object.keys(C).join('\n'))
    return (
        <div className = "databas-list">
          <h2>Database List</h2><hr/>
            <FormGroup>
             <Label for="databasesSort">Sort Databases By Letter</Label>
             <Input type="select" name="databasesSort" id="databasesSort" defaultValue="--Select--" onChange={this.updateDatabaseList.bind(this)}>
               <option disabled>--Select--</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option><option>F</option><option>G</option><option>H</option><option>I</option>
               <option>J</option><option>K</option><option>L</option><option>M</option><option>N</option><option>O</option><option>P</option><option>Q</option><option>R</option>
               <option>S</option><option>T</option><option>U</option><option>V</option><option>W</option><option>X</option><option>Y</option><option>Z</option>
             </Input>
            </FormGroup>
          <ListGroup>{this.state.databaseList}</ListGroup>
        </div>
      );
    }
  }

export default DatabaseList;
