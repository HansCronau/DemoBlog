import React, { Component } from 'react';
import './Blog.css';

class Blog extends Component {
  constructor() {
    super();
    this.state = {
      something: 'Hello World'
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api', {headers: {'content-type': 'application/json'}})
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({something: data.results[0].name.first});
      // let thing = data.results.map(user => {
      //   return(
      //     <div>{user.name.first}</div>
      //   )
      // })
    })
    
    //console.log("state", this.state.something);
  }

  render() {
    return (
      <div>{this.state.something}</div>
    )
  }
}

export default Blog;
