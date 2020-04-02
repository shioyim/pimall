import * as actions from '../constants/actions';
import assign from 'lodash/assign';

const STATE_INIT = {
  openning: false,
  times: 0,
  author: 'shioyim'
};

function control(state = STATE_INIT, action) {
  switch (action.type) {
    case actions.OPEN:
      return assign({}, state, {
        openning: true,
        times: {times} + 1
      });
    case actions.CLOSE:
      return assign({}, state, {
        openning: false,
      });
    default:
      return state;
  }
}

export default control;
