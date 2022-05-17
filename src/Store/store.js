import {dataReducer} from '../Reducer/dataReducer';
import {alertsReducer} from '../Reducer/AlertsReducer';
import {createStore , combineReducers} from 'redux';

// use the two or more reducers, this combine and posibility of use in all app
const reducers = combineReducers({
    dataReducer,
    alertsReducer,
});
  
export const store = createStore(reducers);