import { store } from './app';
import { actions } from './board';

import { store as  simpleStore} from './app_old';
import { actions as simpleActions} from './board_old';

suite('Change Task Name', () => {
    benchmark('Normalized - Update task name', () => {
        store.dispatch(actions.editTask(1, "New Task Name"))
    });

    benchmark('Simple - Update task name', () => {
        simpleStore.dispatch(simpleActions.editTask(1, 1, "New Task Name"))
    });
});