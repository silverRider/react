import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDSHWMV9Mw48eyCZ9FyW4t4Cj47q3EDMqw';

//Create a new componenet. This componenet
//shoud produce some HTML
const App = () => {
  return <div>Hi!</div>;
}

//Take this component's generated HTML
//and put it on the page (in the DOM)
ReactDOM.render(<App />,  document.querySelector('.container'));