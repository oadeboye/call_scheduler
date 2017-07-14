import React from 'react';
import TimeSlot from './TimeSlot';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';

import {
  FormGroup,
  FormControl,
  Button,
  Form
} from 'react';

class TimeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      name: '',
      number: '',
      time: 0,
    };
  }

//when the modal is opened, store the current timeslot as the state
  openModal(time) {
    this.setState({
      modalIsOpen: true,
      time: time.time,
      name: time.name,
      number: time.number,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';

    //Logs that a modal is currently open.
    console.log('Modal has been opened');
  }


  handleSubmit(){
    //Submit the time, name, and number from the state
    //to the function toggleTime, which will dispatch
    //an 'ADD_APPOINTMENT' action.
    this.props.toggleTime(this.state.time, this.state.name, this.state.number);

    //Clear the values in the modal,
    //let the state be clear again,
    //and close the modal using modalIsOpen: false.
    this.setState({
      name: '',
      number: '',
      modalIsOpen: false,
      time: 0,
    });
  }

  handleNameChange(event){
    //Set the state to include the name of the person
    //with whom we are making an appointment.
    this.setState({
      name: event.target.value,
    })
  }

  handleNumberChange(event){
    //Set the state to include the phone number of the person
    //with whom we have made an appointment.
    this.setState({
      number: event.target.value,
    })
  }

  render(){
    //start by mapping the times to individual time slots
    //then, define the modal and pass it functions
    //that handle opening and submission
    return (
      <div className="timeList">
        <ul className="list">
          {
            this.props.times.map((time, index) => (
              <TimeSlot
                key={index}
                slot={time}
                filled={time.filled}
                handleOnClick={()=>this.openModal(time)}
              />
            ))
          }
        </ul>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={()=>this.afterOpenModal()}
          onRequestClose={()=>this.handleSubmit()}
          // className="modal"
          contentLabel="Scheduler">
          <form>
            <div className="form-group">
              <input
                type="text"
                value={this.state.name}
                placeholder="Enter name"
                onChange={(event) => this.handleNameChange(event)}>
              </input>
              <input
                type="text"
                value={this.state.number}
                placeholder="Enter number"
                onChange={(event) => this.handleNumberChange(event)}>
              </input>
              <button
                type="submit">
                Schedule!
              </button>
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default TimeList;
