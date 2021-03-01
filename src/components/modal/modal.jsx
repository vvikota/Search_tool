import React from "react";
import './modal.css';
import {connect} from "react-redux";
import {getCurrentUser} from "../../redux/selectors"; 
import {ActionCreator} from "../../redux/reducer";

const Modal = ({currentUser, closePopup}) => {
    return <div className="popup-shadow">
      <div className="popup-content">
        <h3>User information:</h3>
        <div className="user-adress">User address: 
          <span>city: {currentUser.address.city}</span>
          <span> street: {currentUser.address.street}</span>
        </div>
        <div>User company: {currentUser.company.name}</div>

        <span className="popup-closer" onClick={() => closePopup()}>Close</span>
      </div>
    </div>
} 
   
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  currentUser: getCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  closePopup: () => dispatch(ActionCreator.closePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);