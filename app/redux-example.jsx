var redux = require('redux');

console.log('Starting redux example');

//Name reducer and action generators
//----------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
}

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

//Hobbies reducer and action generators
//----------------------------------
var hobbyKey = 1;
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

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  }
}

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  }
}

//Movies reducer and action generators
//----------------------------------
var movieKey = 1;
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

var addMovie = (name, genre) => {
  return {
    type: 'ADD_MOVIE',
    name: name,
    genre: genre
  }
}

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  }
}


//Reducer
//----------------------------------
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

store.dispatch(changeName('Mihir'));
store.dispatch(addHobby('Singing'));
store.dispatch(removeHobby(1));
store.dispatch(addMovie('12 years a slave', 'History'));
store.dispatch(removeMovie(1));
