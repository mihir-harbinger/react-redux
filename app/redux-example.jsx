var redux = require('redux');

console.log('Starting redux example');

var defaultState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};

var hobbyKey = 1;
var movieKey = 1;

var reducer = (state = defaultState, action) => {
    switch(action.type){
      case 'CHANGE_NAME':
        return{
          ...state,
          name: action.name
        }
      case 'ADD_HOBBY':
        return{
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: hobbyKey++,
              hobby: action.hobby
            }
          ]
        }
      case 'REMOVE_HOBBY':
        return{
          ...state,
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
        }
      case 'ADD_MOVIE':
        return{
          ...state,
          movies: [
            ...state.movies,
            {
              id: movieKey++,
              name: action.movie.name,
              genre: action.movie.genre
            }
          ]
        }
      default:
        return state;
    }
};
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
