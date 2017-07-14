const toggleTime = (time, name, number) => {
  return {
    type: 'ADD_APPOINTMENT',
    time,
    name,
    number,
    filled: false
  }
}


export { toggleTime };
