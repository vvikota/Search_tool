import React from "react";
import './filter.css';
import {connect} from "react-redux";
import {getFilterValue} from "../../redux/selectors"; 
import {ActionCreator} from "../../redux/reducer";

const Filter = ({setValue, resetFilter, filterValue}) => {
  // console.log(filterValue)
  return <div className="filter-wrapper">
    <input 
      type="text"
      name="filter"
      id="filter"
      placeholder="Filter"
      value={filterValue}
      onChange={(e) => setValue(e.target.value)}  
    />
    <button onClick={() => resetFilter()}>Reset</button>
  </div>
}


const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  filterValue: getFilterValue(state),
});

const mapDispatchToProps = (dispatch) => ({
  setValue: (value) => dispatch(ActionCreator.setValue(value)),
  resetFilter: () => dispatch(ActionCreator.resetFilterValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);