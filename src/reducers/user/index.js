import { Record } from 'immutable';
import { createSelector } from 'reselect';

//create user state
const ReducerRecord = Record({
	user: {},
});

export const moduleName = 'userReducer';
const stateSelector = state => state[moduleName];

const userReducer = (state = new ReducerRecord(), action) => {
	switch (action.type) {
		case 'REGISTER':
            return state.set('user', action.payload);
            
		default:
			return state;
	}
};

const user = createSelector(stateSelector, state => state.user);


export { user, userReducer };