import { ITEMS } from '../constants/items';
import data from '../../data/code-challenge';

let nextItemId = data.list[data.list.length - 1] + 1;

export const addItem = payload => ({
  type: ITEMS.ADD_ITEM,
  id: nextItemId++,
  payload
});