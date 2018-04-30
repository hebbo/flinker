import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    links: []
  }

  render() {
    return (
      <div> LINKS GO HERE </div>
      );
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/links',
      { headers: {"Authorization" : "Bearer YQLY9SoZAjtc21YUy4ar"}
    })
    .then((response) => {
      this.setState({ links: response.data})
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.links.map((link) =>
          <Link {...link} />
        )}
      </div>
    );
  }
}

class Link extends Component {
  render() {
    const {id, short_url, long_url} = this.props

    return (
      <div>
        id: {id} short_url: {short_url} long_url: {long_url}
      </div>
    )
  }
}

export default App;
