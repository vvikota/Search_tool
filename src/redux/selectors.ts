import { stateInterface } from './../types';
import {createSelector} from "reselect";

const getUsers = (state: stateInterface) => {
  return state.users;
}

export const getHiddenUsers = (state: stateInterface) => {
  return state.hiddenUsers;
}

export const getCurrentUsersList = createSelector(
  getUsers,
  getHiddenUsers,
  (users, hiddenUsers) => {
    return users.filter( user => hiddenUsers.indexOf(user.id) < 0)
  }
);

export const getCurrentUser = (state: stateInterface) => {
  return state.currentUser
}

export const getIsModalOpen = (state: stateInterface) => {
  return state.isModalOpen
}

export const getFilterValue = (state: stateInterface) => {
  return state.filterValue
}