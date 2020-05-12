import { Model, fk, many, attr } from 'redux-orm';
import * as types from '../action_types';

class TaskList extends Model {
    toString() {
        return `TaskList: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
TaskList.modelName = 'TaskList';

// Declare your related fields.
TaskList.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    name: attr(),
    board: fk('Board', 'taskLists')
};
export default TaskList;