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
      this.setState({ repos: result.date })
      console.log(this.state.repo);
      console.log('react', '1')
    })
    .catch(err => {
      console.log(err)
    });
  }

  createDate = (title, language, status, reset) => {
    console.log('react', title, language, status)
    language = (language);
    status = (status);

    axios.post(`http://localhost:9000/tasks/${title}/${language}/${status}`)
      .then(result => {
        // console.log('react', 'complete add')
        this.setState({repos: result.data})
      })
      .catch(err => {
        console.log(err);
      });
      reset()
  }


  render() {
    return (
      <div>
        <Input repos={this.state.repos} createDate={this.createDate} />
        <Table repos={this.state.repos} createDate={this.createDate} />
      </div>
    )
  }
}
