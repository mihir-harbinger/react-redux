var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  console.log('New action', action);
  switch(action.type){
    case 'CHANGE_NAME':
      return{
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

//subscribe to state change
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
});
//unsubscribe();

var currentState = store.getState();
console.log('Current State', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jane'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

console.log('Current State', store.getState());
