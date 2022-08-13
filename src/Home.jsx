import React, { Component } from 'react'

export default class Home extends Component {
    state={   }
  render() {
    console.log("child component called")
    console.log(this.props)
    const {name}=this.props
    return (
      <div>
        <h1>Home component{name}</h1>
      </div>
    )
  }
}
