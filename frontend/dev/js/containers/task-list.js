import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectTask} from '../actions/index';
import {addTask} from '../actions/index';
import {sortByDeadlineUp} from '../actions/index';
import {sortByDeadlineDown} from '../actions/index';
import {sortByPriorityUp} from '../actions/index';
import {sortByPriorityDown} from '../actions/index';

class TaskList extends Component {
    constructor () {
      super()
      this.state = { active: false }
    }
    renderList() {
        return this.props.tasks.map((task) => {
          if(!task.done){
            return (
              <tr key={task.id} onClick={() => this.props.selectTask(task)}><th>{task.title}</th><th>{task.deadline}</th><th>{task.priority}</th><th>Doing</th></tr>
            );
          }
          else{
            return (
              <tr key={task.id} onClick={() => this.props.selectTask(task)}><th>{task.title}</th><th>{task.deadline}</th><th>{task.priority}</th><th>Done</th></tr>
            );
          }
        });
    }

    render() {
        return (
            <div>
            Sory by&nbsp;
            Deadline&nbsp;
            <button className='btn' onClick={() => this.props.sortByDeadlineUp(this.props.tasks)}>↑</button>&nbsp;
            <button className='btn' onClick={() => this.props.sortByDeadlineDown(this.props.tasks)}>↓</button> &nbsp;
            Priority&nbsp;
            <button className='btn' onClick={() => this.props.sortByPriorityUp(this.props.tasks)}>↑</button>&nbsp;
            <button className='btn' onClick={() => this.props.sortByPriorityDown(this.props.tasks)}>↓</button>
            <hr />
            <table className="table">
              <thead>
                <tr>
                <th>Title</th>
                <th>Deadline</th>
                <th>Priority</th>
                <th>Done</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </table>
            </div>
        );
    }

}

// Get apps state and pass it as props to TaskList
//      > whenever state changes, the TaskList will automatically re-render
function mapStateToProps(state) {
    return {
        tasks: state.tasks
    };
}

// Get actions and pass them as props to to TaskList
//      > now TaskList has this.props.selectTask
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectTask: selectTask, sortByDeadlineUp: sortByDeadlineUp ,sortByDeadlineDown: sortByDeadlineDown, sortByPriorityUp: sortByPriorityUp, sortByPriorityDown: sortByPriorityDown, addTask: addTask}, dispatch);
}

// We don't want to return the plain TaskList (component) anymore, we want to return the smart Container
//      > TaskList is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(TaskList);
