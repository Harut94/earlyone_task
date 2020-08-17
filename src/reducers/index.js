import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
//reducers
import { userReducer } from './user';


const rootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		userReducer
	});

export default rootReducer;