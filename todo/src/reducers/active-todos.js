
export default (stateProp = null, action) => {
    console.log('hi');
    switch (action.type) {
      case 'TODOS_SELECTED':
        return action.payload;
      default:
        return stateProp;
    }
  };