import React, { Component } from 'react';
import Table from './component/Table';
import Input from './component/Input';
import axios from 'axios';


export default class App extends Component {
  state = {
    repos : [],
  }

  getRebo = () => {
    axios.get('http//localhost:9000/tasks')
    .then(result => {
      this.setState({ repos: Response.date })
      console.log(this.state.repo);
      console.log('react', '1')
    })
    .catch(err => {
      console.log(err)
    });
  }


  render() {
    return (
      <div>
        <Input />
        <Table />
      </div>
    )
  }
}
