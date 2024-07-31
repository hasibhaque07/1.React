import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import '../Style.css'
export default class State extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
         
      }
    }
    
    Inc = () => {
        this.setState({
            count : this.state.count + 1
        })
        
    }
    Dec = () => {
        this.setState({
            count : this.state.count - 1
        })
        
    }
    render() {
        const {count} = this.state
        return (
            
        <div>
            <h1>{count}</h1>
            <Button onClick={this.Inc}>+</Button>
            <Button className = 'dec-btn' onClick={this.Dec} disabled = {count === 0 ? true : false}>-</Button>
        </div>
        
        )
    }
}
