import * as React from 'react';
import './filter.css';
import {connect} from "react-redux";
import {getFilterValue} from "../../redux/selectors"; 
import {ActionCreator} from "../../redux/reducer";
import {stateInterface} from "../../types";

interface filterProps {
  setValue: (value: string) => void
  resetFilter: () => void
  filterValue: string
}

const Filter = ({setValue, resetFilter, filterValue}: filterProps) => {
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


const mapStateToProps = (state: stateInterface) => ({
  filterValue: getFilterValue(state),
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => ({
  setValue: (value: string) => dispatch(ActionCreator.setValue(value)),
  resetFilter: () => dispatch(ActionCreator.resetFilterValue()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);