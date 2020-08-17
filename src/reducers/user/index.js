import { Record } from 'immutable';
import { createSelector } from 'reselect';
//constants
import { REGISTER } from './constants'
//import actions
import actions from './actions';
//create user state
const ReducerRecord = Record({
	user: {},
});

export const moduleName = 'userReducer';
const stateSelector = state => state[moduleName];

//actions
export const { registerUser } = actions;

//reducer
const userReducer = (state = new ReducerRecord(), action) => {
	switch (action.type) {
		case REGISTER:
            return state.set('user', action.payload);
		default:
			return state;
	}
};
//selectors
const userSelector = createSelector(stateSelector, state => state.user);

const isUserRegisteredSelector = createSelector(stateSelector, state => !!Object.keys(state.user).length)

export { userSelector, isUserRegisteredSelector, userReducer };