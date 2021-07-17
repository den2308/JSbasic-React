import userConstants from '../constants/user';

export const getUser = (user) => ({
  type: userConstants.GET_USER,
  user,
});
