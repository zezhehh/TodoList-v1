import {combineReducers} from 'redux';
import TaskReducer from './reducer-tasks';
import ActiveTaskReducer from './reducer-active-task';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    tasks: TaskReducer,
    activeTask: ActiveTaskReducer
});

export default allReducers
