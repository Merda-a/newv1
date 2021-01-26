
import { setDataAC, getTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { HomeClass } from './HomeClass';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
import { withRouter } from 'react-router-dom';


let maptoStateToProps = (state) => {

   return {
        disciplines: state.DisciplinesReduser.disciplines,
      user: state.LoginReduser
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      setData: (data) => {
         dispatch(setDataAC(data));
      },
      getUser: () => {
         dispatch(getUserInfoThunkCreator());
      },
      getTimetable: (group, dateTime) => {
         dispatch(getTimetableThunkCreator(group, dateTime));
      }
   }
}

let WithURL = withRouter(HomeClass);

export default connect(maptoStateToProps, mapDispatchToProps)(WithURL);