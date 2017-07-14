import React from 'react';

//import list of time slots via timeslot component
import TimeList from './TimeList';

import { connect } from 'react-redux';
import { toggleTime } from '../actions/index';


let SchedulerApp = ({ times, toggleTimeClick }) => {
  return (
    <div className="scheduleApp">
      <TimeList
        times={times}
        toggleTime={()=>toggleTimeClick(time, name, number)}
        // pass the list of times to the time list
        // pass the scheduling dispatched function to the time list
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    times: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTimeClick: (time, name, number) => {
      dispatch(toggleTime(time, name, number))
    },
  }
}

SchedulerApp = connect( mapStateToProps,mapDispatchToProps)(SchedulerApp);

export default SchedulerApp;
