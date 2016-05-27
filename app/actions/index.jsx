var axios = require('axios');

export var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  }
}

export var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby: hobby
  }
}

export var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id: id
  }
}

export var addMovie = (name, genre) => {
  return {
    type: 'ADD_MOVIE',
    name: name,
    genre: genre
  }
}

export var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id: id
  }
}

export var startLocationFetch = () => {
  return {
    type: 'START_LOCATION_FETCH'
  };
};

export var completeLocationFetch = (url) => {
  return {
    type: 'COMPLETE_LOCATION_FETCH',
    url: url
  };
};

export var fetchLocation = () => {
  return (dispatch, getState) => {
    dispatch(startLocationFetch());

    axios.get('http://ipinfo.io')
    .then((res) => {
      var loc = res.data.loc;
      var baseUrl = 'http://maps.google.com?q=';
      dispatch(completeLocationFetch(baseUrl + loc));
    });
  }
}
