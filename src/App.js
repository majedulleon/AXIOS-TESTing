import React, { Component } from 'react';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {

  componentDidMount() {

    //FETCH API EXAMPLE
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json()).then(data => console.log(data))

    //AXIOS GET EXAMPLE
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.data)
    //   .then(data => console.log(data))
    //   .catch(error => console.log(error.message));

    //AXIOS POST EXAMPLE
    // axios.post('https://jsonplaceholder.typicode.com/posts', { title: "Something", body: "Something Else" }).then(response => console.log(response));

    //AXIOS PUT EXAMPLE (/2 is id)
    // axios.put('https://jsonplaceholder.typicode.com/posts/2', { title: "Something1", body: "Something Else1" }).then(response => console.log(response));

    //AXIOS DELETE EXAMPLE (/1 is id)
    // axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => console.log(response));


  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
