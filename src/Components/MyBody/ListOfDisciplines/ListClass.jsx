import React from 'react';
import classes from './List.module.css'
import { reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';
import {ListOfDisciplines} from './ListOfDisciplines';




export class ListClass extends React.Component {


   getDisciplines = (props) => {
      debugger
      let id = this.props.match.params.id;
      return (
         <div>
            <ListClass  name={this.props.disciplines.fullName} id={id}/>
         </div>);
   }

   render() {
      return (<ListOfDisciplines {...this.props} ></ListOfDisciplines>);
   }
}
