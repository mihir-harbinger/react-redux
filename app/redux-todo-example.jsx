var redux = require('redux');

console.log('Starting Redux Todo Example');

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
      }
    case 'TOGGLE_SHOW_COMPLETED':
      return{
        ...state,
        showCompleted: !state.showCompleted
      }
    case 'UPDATE_TODOS':
      return{
        ...state,
        todos: action.todos
      }
    default:
      return state;
  }
}

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
// console.log(store.getState());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('current state', state);
  document.getElementById('app').innerHTML = JSON.stringify(state, null, 2);
})

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'new keyword'
});

store.dispatch({
  type: 'TOGGLE_SHOW_COMPLETED',
});

store.dispatch({
  type: 'UPDATE_TODOS',
  todos: [{
    text: 'something new'
  }, {
    text: 'soemthing pending'
  }]
})
