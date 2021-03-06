import React, { Component } from 'react';
import { FormGroup, Label, Input, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { updateAllDatabases, updateDatabaseListFilter, updateCurrentDatabase, updateCurrentAction } from '../actions'
import '../App.css'

const mapStateToProps = (state) => {
  return { allDatabases: state.allDatabases, databaseListFilter: state.databaseListFilter }
}

var colorToUse = 'default'

class DatabaseList extends Component {

  componentWillMount() {
      this.fetchData();
  }

  fetchData() {
    fetch('https://libapps.uncw.edu/databases/') //My local ip address (so the phone can access it)
      .then((response) => response.json())
      .then((databases) => {
        databases.data.forEach(function(database) {
          if (database.resourceType) database.resourceType = database.resourceType.split(",")
        });
        this.props.dispatch(updateAllDatabases(databases.data))
      })
  }

  updateDatabaseList(event) {
      event.preventDefault();
      let letter = event.target.value;
      this.props.dispatch(updateDatabaseListFilter(letter))
      console.log(this.props.allDatabases)
  }

  editDatabase(database) {
      this.props.dispatch(updateCurrentAction("Save Changes"))
      this.props.dispatch(updateCurrentDatabase(database.id, database.resourceName, database.resourceType, database.link, database.resourceAdvisory,
           database.resourceAdvisoryText, database.shortDescription, database.longDescription, database.coverageDates, database.access, database.vendor))
  }

  render() {
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
          <ListGroup>{
            this.props.allDatabases.map(function(database, index) {
                if (this.props.databaseListFilter.toLowerCase() === database.resourceName[0].toLowerCase()) {
                    colorToUse === 'default' ? colorToUse = 'info' : colorToUse = 'default'

                    return <ListGroupItem key={database.id} color={colorToUse} className = "right"><span className = "left">{database.resourceName}</span>
                              <span><Button color={colorToUse} onClick={() => this.editDatabase(database)}>Edit</Button></span></ListGroupItem>;
                  }
                return null
            }, this)}
          </ListGroup>
        </div>
      );
    }
  }

export default connect(mapStateToProps)(DatabaseList)
