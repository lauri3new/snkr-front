import 'whatwg-fetch';

export const getData = (path = "random/", type = "PRODUCTS") => {
  // dev or prod
  //  const baseUrl = "/api/";
  // if (process.env.NODE_ENV == 'production') {
  //   console.log('hello production');
  // } else {
  //   console.log('development');
  // }
  const baseUrl = "http://localhost:3001/api/";
  const myHeaders = new Headers();
  myHeaders.append("X-Requested-With", "XMLHttpRequest");
  return (dispatch) => {
    dispatch(getRequest());
    return fetch(baseUrl + path, { headers: myHeaders })
  .then(
    (response) => {
      if (response.status !== 200) {
        throw new Error(response.status + " " + response.statusText);
      }
      return response.json();
    })
  .then((json) => {
    dispatch(getRequestSuccess(json, type));
  })
  .catch((err) => {
    dispatch(getRequestFailure(err));
  });
  };
};

// fetch request
const getRequest = () => ({
  type: `GET_REQUEST`
});

// fetch sucess
const getRequestSuccess = (data, type) => ({
  type: `GET_${type}_SUCCESS`,
  payload: data
});

// fetch failure
const getRequestFailure = err => ({
  type: `GET_REQUEST_FAILURE`,
  payload: err.message || "Something went wrong"
});

export const selectWinner = (ID) => {
  return (dispatch) => {
    dispatch(chosenShirt(ID));
  };
};

const chosenShirt = ID => ({
  type: `SHIRT_CHOSEN`,
  payload: `okokok ${ID}`
});
