import { ITEMS } from '../constants/items';
import data from '../../data/code-challenge';

const initialState = data;

const items = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS.ADD_ITEM:
      return Object.assign({}, state, {
         items:
          {
            list: state.list.push(action.id),
            details: state.details[action.id] = action.payload
          }
      })
    default:
      return state;
  }
}

export default items;