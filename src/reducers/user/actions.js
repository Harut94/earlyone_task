import { REGISTER } from './constants';

const registerUser = (user) => {
    return {
        type: REGISTER,
        payload: user
    };
};

export default { registerUser }; 