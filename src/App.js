import React, { Component } from 'react'
import Home from './Home';
import './App.css';
import axios from 'axios';



export default class App extends Component {
  constructor(){//step 1 of creation phase
    super()
    this.state={
      userNames: [],
      a:10

    }
    console.log("constructor is called")
  }
  componentDidMount(){//it is step 4 of creation phase
    console.log("component dimount called")
    axios.get("https://dummyjson.com/users")
    .then(res=>{
      let users=[]
      res.data.users.map(user=>
        users.push(user.firstName))
        //console.log(users)
       // this.setState({
          //userNames:users
        //})
    })
  }
shouldComponentUpdate(nextProps,nextState){//it is step 1 of updation phase and it checks the state to changed state.
  console.log("component should update")
  console.log(this.state)
  console.log(nextState)
  if(this.state.a!==nextState.a){
    return true
  }
  else{
    return false
  }
}
componentDidUpdate(){//it is step2 of updation phase
  console.log("component did update called")
}
  render() {//it is step2 of creation phase
    console.log("render is called")
    return (//it is step3 of creation phase
      <div>
        <Home userNames={this.state.userNames.length!==0?this.state.userNames:null}/>
        {/*
          this.state.userNames.length!==0&&
          this.state.userNames.map(name=><p>{name}</p>)
    */}
    <h1>a:{this.state.a}</h1>
    <button onClick={()=>this.setState({a:this.state.a + 1})}>Update A</button>
      </div>
    )
  } 
}

//summary-first constructor is called,then render is called,then child is called
//then component didmount is called
