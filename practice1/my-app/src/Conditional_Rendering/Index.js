import React, { Component } from 'react'
import Home from './Home'
import Login from './login'

export default class Conditional_Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn : true
      }
    }
    
    render() {
        if(this.state.isLogedIn){
            return <Home />
        }
        else{
            return <Login />
        }
    }
}
 