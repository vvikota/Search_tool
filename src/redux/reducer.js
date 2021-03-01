const initialState = {
  filterValue: '',
  users: [],
  hiddenUsers: [],
  isModalOpen: false,
  currentUser: null
}

const ActionCreator = {

  deleteUser: (id) => ({
    type: `DELETE_USER`,
    payload: id,
  }),

  loadData: (offers) => ({
    type: `LOAD_DATA`,
    payload: offers,
  }),

  openModal: (user) => ({
    type: `OPEN_MODAL`,
    payload: user,
  }),

  closePopup: () => ({
    type: `CLOSE_POPUP`
  }),

  setValue: (value) => ({
    type: `SET_VALUE`,
    payload: value,
  }),

  resetFilterValue: () => ({
    type: `RESET_FILTER_VALUE`,
  })
}

const Operation = {
  loadData: () => (dispatch, _getState, api) => {
    return api.get(`/users`)
      .then((response) => {
        dispatch(ActionCreator.loadData(response.data));
      });
  }
};

const reducer = (state = initialState , action) => {
  switch (action.type) {

    case `DELETE_USER`: 
    let updateHiddenUsers = state.hiddenUsers;
    updateHiddenUsers.push(action.payload);
      return {
        ...state,
        hiddenUsers: [...updateHiddenUsers],
    };

    case `LOAD_DATA`:
      return {
        ...state,  
        users: action.payload,
    };

    case `OPEN_MODAL`:
      return {
        ...state,  
        currentUser: action.payload,
        isModalOpen: true,
    };

    case `CLOSE_POPUP`: 
      return {
        ...state,
        isModalOpen: false,
    };

    case  `SET_VALUE`: 
      return {
        ...state,
        filterValue: action.payload,
    };

    case `RESET_FILTER_VALUE`:
      return {
        ...state,
        filterValue: '',
      };

    default: return state;
  }  
};

export {reducer, ActionCreator, Operation};