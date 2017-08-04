/*
 * All reducers get two parameters passed in, state and action that occurred
 *       > state isn't entire apps state, only the part of state that this reducer is responsible for
 * */

// "state = null" is set so that we don't throw an error when app first boots up
import $ from 'jquery';
export default function (state = null, action) {
    switch (action.type) {
        case 'TASK_SELECTED':
          return action.payload;
          break;
        case 'TASK_DELETED':
          return null;
          break;
        case 'TASK_EDITED':
          return action.payload;
          break;
        case 'TASK_DONE':
          return action.payload;
          break;
        case 'TASK_ADDED':
          return null;
          break;
    }
    return state;
}
