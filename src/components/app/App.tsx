import * as React from 'react';
import './App.css';
import List from "../list/list";
import Filter from "../filter/filter";
import Modal from "../modal/modal";
import {getIsModalOpen} from "../../redux/selectors";
import {connect} from "react-redux";
import {stateInterface} from "../../types";

interface appProps {
  isModalOpen: boolean
}

function App(props: appProps) {
  return (
    <>
      <Filter />
      <List />
      {props.isModalOpen ? <Modal /> : null}
    </>
  );
}

const mapStateToProps = (state: stateInterface) => ({
  isModalOpen: getIsModalOpen(state),
});

export default connect(mapStateToProps)(App);
