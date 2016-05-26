var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
    switch(action.type){
      case 'CHANGE_NAME':
        return{
          ...state,
          name: action.name
        }
      default:
        return state;
    }
};
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
// console.log('currentState', store.getState());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Changed name: ', state.name);
  document.getElementById('app').innerHTML = state.name;
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Monica'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jane'
});
