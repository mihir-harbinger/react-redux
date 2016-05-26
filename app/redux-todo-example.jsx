var redux = require('redux');

console.log('Starting Redux Todo Example');

var defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
}
var reducer = (state = defaultState, action) => {
  //
  return state;
}

var store = redux.createStore(reducer);

console.log(store.getState());
