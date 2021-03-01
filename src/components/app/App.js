import React from "react";
import './App.css';
import List from "../list/list.jsx";
import Filter from "../filter/filter.jsx";
import Modal from "../modal/modal.jsx";
import {getIsModalOpen} from "../../redux/selectors";
import {connect} from "react-redux";

function App(props) {
  // console.log(currentUser)
  return (
    <>
      <Filter />
      <List />
      {props.isModalOpen ? <Modal /> : null}
      
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  isModalOpen: getIsModalOpen(state),
});

export default connect(mapStateToProps)(App);
