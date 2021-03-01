import React from "react";
import './list.css';
import {connect} from "react-redux";
import {getCurrentUsersList, getFilterValue} from "../../redux/selectors"; 
import {ActionCreator} from "../../redux/reducer";

const List = (props) => {
  const {usersList, deleteUser, openModal, filterValue} = props;

  const markString = (value) => {
    let startPosition  = value.indexOf(filterValue);
    if(startPosition >= 0){

      let startOfLine = value.slice(0, startPosition);
      let endOfLine = value.slice(startPosition + filterValue.length, value.length);

      return <>{startOfLine}<span className="marked-text">{filterValue}</span>{endOfLine} </>
    } else {
      return value
    }
  } 

  return <ul className="user__list">
    {usersList.map((user, index) => {
      if(user.name.indexOf(filterValue) >= 0 ||
         user.username.indexOf(filterValue) >= 0 ||
         user.email.indexOf(filterValue) >= 0 || filterValue === ''){
        return <li className="user__card" key={index}>
        <div className="user-information">
          <span 
            onClick={() => openModal(user)}
            className="user-name">
              name: {markString(user.name)}
          </span>
          <span>username: {markString(user.username)}</span>
          <span>email: {markString(user.email)}</span>
        </div>
  
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </li>
      } else {return false}
      
    }
      
    )}
  </ul>;
};


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  usersList: getCurrentUsersList(state),
  filterValue: getFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteUser: (id) => dispatch(ActionCreator.deleteUser(id)),
  openModal: (user) => dispatch(ActionCreator.openModal(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);