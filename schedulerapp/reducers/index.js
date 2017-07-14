import initialState from '../initialState';

const reducer = (state = initialState, action) => {
  switch (action.type){
    case 'ADD_APPOINTMENT':
      const newState = [ ...state ];
      let index;
      for (var i = 0; i < newState.length; i++) {
        if (newState[i].time === action.time){
          index = i;
        }
      };

      const update = {
        time: newState[index].time,
        name: newState[index].name,
        number: newState[index].number,
        filled: true,
      };

      newState.splice(index, 1, update);
      return newState;

    default:
      return state;
  };
}

export default reducer;
