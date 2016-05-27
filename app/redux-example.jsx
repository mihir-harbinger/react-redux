var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var hobbyKey = 1;
var movieKey = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
}

var hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: hobbyKey++,
          name: action.hobby
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
}

var moviesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: movieKey++,
          name: action.name,
          genre: action.genre
        }
      ]
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f));
// console.log('currentState', store.getState());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state);
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Monica'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Running'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Walking'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Jane'
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    name: 'Whiplash',
    genre: 'Drama'
  }
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    name: 'Avengers',
    genre: 'Action'
  }
});

store.dispatch({
  type: 'ADD_MOVIE',
  movie: {
    name: 'Iron Lady',
    genre: 'Political Drama'
  }
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});
