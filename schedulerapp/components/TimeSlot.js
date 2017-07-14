import React from 'react';
// import Modal from 'react-modal';

const TimeSlot = ({ slot, filled, handleOnClick }) => {

  return (
    <li className="eachTimeSlot">
      <span>
        <h5>Time: {slot.time}:00</h5>
        {filled ? 'Appointment with ' + slot.name : <button className="btn btn-default" onClick={handleOnClick}>Schedule something!</button>}
      </span>
    </li>
  );
}
export default TimeSlot;
