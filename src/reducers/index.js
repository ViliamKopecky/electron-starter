import { combineReducers } from 'redux';
import * as actions from '../actions';

export default combineReducers({
	foo: (state = 'bar') => state
});
