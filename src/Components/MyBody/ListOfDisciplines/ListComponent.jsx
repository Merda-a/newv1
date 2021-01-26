
import { getDisciplinesThunkCreator } from '../../../Redux/disciplines-redux';
import { ListClass } from './ListClass';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';


let maptoStateToProps = (state) => {

   debugger
   return {
      disciplines: state.DisciplinesReduser.disciplines,
      user: state.LoginReduser
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      
      getUser: () => {
         dispatch(getUserInfoThunkCreator());
      },
      getDisciplines: () => {
         dispatch(getDisciplinesThunkCreator());
      }
   }
}
const ListComponent = connect(maptoStateToProps, mapDispatchToProps)(ListClass);

export default ListComponent;