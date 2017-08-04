export const selectTask = (task) => {
    console.log("You clicked on task: ", task.title);
    return {
        type: 'TASK_SELECTED',
        payload: task
    }
};
export const doneTask = (task) => {
    console.log("You finish task: ", task.title);
    return {
        type: 'TASK_DONE',
        payload: task
    }
};
export const editTask = (task) => {
    console.log("You edit task: ", task.title);
    return {
        type: 'TASK_EDITED',
        payload: task
    }
};

export const addTask = (task) => {
    console.log("You add task: ", task.title);
    return {
        type: 'TASK_ADDED',
        payload: task
    }
};

export const deleteTask = (task) => {
    console.log("You delete task: ", task.title);
    return {
        type: 'TASK_DELETED',
        payload: task
    }
};
export const sortByPriorityUp = (tasks) => {
    console.log("You sort tasks by priority");
    return {
        type: 'SORT_PRIORITY_UP',
        payload: tasks
    }
};
export const sortByPriorityDown = (tasks) => {
    console.log("You sort tasks by priority");
    return {
        type: 'SORT_PRIORITY_DOWN',
        payload: tasks
    }
};
export const sortByDeadlineUp = (tasks) => {
    console.log("You sort tasks by deadline");
    return {
        type: 'SORT_DEADLINE_UP',
        payload: tasks
    }
};
export const sortByDeadlineDown = (tasks) => {
    console.log("You sort tasks by priority");
    return {
        type: 'SORT_DEADLINE_DOWN',
        payload: tasks
    }
};
