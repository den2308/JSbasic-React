import constants from '../constants/user';

export const initialState = () => ({
  firstName: '',
  lastName: '',
});

export default (state = initialState(), action) => {
  switch (action.type) {
    case constants.GET_USER:
      return {
        firstName: 'John',
        lastName: 'Weak'
      }
    default: return state;
  }
};
