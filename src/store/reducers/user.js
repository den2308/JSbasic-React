import constants from '../constants/user';

export const initialState = () => ({
  authToken: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case constants.GET_USER:
      return {
        authToken: action.user.autToken,
      }
    default: return state;
  }
};
