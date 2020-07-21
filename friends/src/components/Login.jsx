import React from 'react'
import { Button, TextField } from '@material-ui/core';
import axiosWithAuth from '../utils/axiosWithAuth'

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  submit = e => {
    e.preventDefault()
    axiosWithAuth().post("/api/login", {
      username: this.state.credentials.username,
      password: this.state.credentials.password
    })
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      this.props.history.push("/dashboard")
    })
    .catch(err => {
      console.error(err)
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome to the login!</h1>
        <form>
          <TextField onChange={this.handleChanges} label="Username" name="username"/>
          <TextField onChange={this.handleChanges} type="password" label="Password" name="password"/>
          <Button variant="contained" onClick={this.submit}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login