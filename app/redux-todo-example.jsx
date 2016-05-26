var redux = require('redux');

console.log('Redux Todo Example');

var defaultState = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'CHANGE_SEARCH_TEXT':
      return{
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
}

var store = redux.createStore(reducer);

console.log('Current State', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Walk'
});
console.log('Current State', store.getState());
