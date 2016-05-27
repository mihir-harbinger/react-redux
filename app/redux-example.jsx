var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configure-store').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state);
  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  }
  else if(state.map.url){
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">Your location</a>';
  }
});

store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Mihir'));
store.dispatch(actions.addHobby('Singing'));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.addMovie('12 years a slave', 'History'));
store.dispatch(actions.removeMovie(1));
