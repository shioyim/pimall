import * as actions from '../constants/actions';

function userOpenRequest() {
  return {type: actions.OPEN};
}

function userCloseRequest() {
  return {type: actions.CLOSE};
}

export function Switch(order) {
  return (dispatch) =>{
    if (order === false) {
      dispatch(userOpenRequest());
    } else {
      dispatch(userCloseRequest());
    }
  };
}
