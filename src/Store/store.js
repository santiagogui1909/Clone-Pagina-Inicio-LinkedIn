import {dataReducer} from '../Reducer/dataReducer';
import {alertsReducer} from '../Reducer/AlertsReducer';
import {createStore , combineReducers} from 'redux';

const reducers = combineReducers({
    dataReducer,
    alertsReducer,
});
  
export const store = createStore(reducers);