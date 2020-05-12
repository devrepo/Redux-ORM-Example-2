import { Model, fk, attr } from 'redux-orm';
import * as types from '../action_types';
import _ from 'lodash';

class Task extends Model {
    toString() {
        return `Task: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
Task.modelName = 'Task';

// Declare your related fields.
Task.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    status: attr({getDefault: () => 1}),
    taskList: fk('TaskList', 'tasks')
};

export default Task;