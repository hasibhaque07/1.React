import React, { Component } from 'react'

export default class Event extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changeValue : ''
      }
    }
    
    onChangeHandler = (e) => {
        this.setState({
            changeValue : e.target.value
        }, ()=> {console.log(this.state.changeValue)})
    }
    render() {
        return (
        <div>
            <input type='text' onChange={this.onChangeHandler}/>
            <p>{this.state.changeValue}</p>
        </div>
        )
    }
}
