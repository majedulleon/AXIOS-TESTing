import React, { Component } from 'react';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {

  state = {
    posts: null, //posts is name of the object from where data is coming
    errMess: null
  }

  componentDidMount() {

    //FETCH API EXAMPLE
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json()).then(data => console.log(data))

    console.log("componentsDidMount ", this.state);
    //AXIOS GET EXAMPLE
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then(data => { this.setState({ posts: data }) })
      .catch(error => { this.setState({ errMess: error.message }) });

    //AXIOS POST EXAMPLE
    // axios.post('https://jsonplaceholder.typicode.com/posts', { title: "Something", body: "Something Else" }).then(response => console.log(response));

    //AXIOS PUT EXAMPLE (/2 is id)
    // axios.put('https://jsonplaceholder.typicode.com/posts/2', { title: "Something1", body: "Something Else1" }).then(response => console.log(response));

    //AXIOS DELETE EXAMPLE (/1 is id)
    // axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(response => console.log(response))
    //.catch(error => { this.setState({ errMess: error.message }) });

  }

  componentDidUpdate() {
    console.log("Update ", this.state);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
