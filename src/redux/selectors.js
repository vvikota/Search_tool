import {createSelector} from "reselect";

const getUsers = (state) => {
  return state.users;
}

export const getHiddenUsers = (state) => {
  return state.hiddenUsers;
}

export const getCurrentUsersList = createSelector(
  getUsers,
  getHiddenUsers,
  (users, hiddenUsers) => {
    return users.filter( user => hiddenUsers.indexOf(user.id) < 0)
  }
);

export const getCurrentUser = (state) => {
  return state.currentUser
}

export const getIsModalOpen = (state) => {
  return state.isModalOpen
}

export const getFilterValue = (state) => {
  return state.filterValue
}