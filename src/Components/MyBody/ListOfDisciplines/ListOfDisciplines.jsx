
import React from 'react'
import classes from './List.module.css'
import { NavLink } from 'react-router-dom';




export const ListOfDisciplines = (props) => {

  console.log(props);
   return (
    <div className={classes.card__lessons} key={props.id}>
               <div className={classes.card_big__footer_other}>
                  <div> 
                     <NavLink to={"/Homework/:id"} >АЛВС</NavLink>
                  </div>
                  <div> 
                     <NavLink to={"/Homework/:id"} >САФ</NavLink>
                   </div>
               </div>
      </div>
   );

}

