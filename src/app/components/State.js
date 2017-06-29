import React from "react";

export class State extends React.Component{
    constructor(props){
        super()
        this.state = {
            age: props.initAge,
            checked: false
        }
    }
    makeAge = () => {
        this.setState({
            age: this.state.age +1
        })
    }
    handleCheck = () => {
        this.setState({
            checked: !this.state.checked
        })
    }
    render(){
        var msg;
        if(this.state.checked){
            msg = <p>Check</p>
        }else{

        }

        return(
            <div>
                <p>{this.state.age}</p>
                <button onClick={this.makeAge}>MakeAge</button>
                <br/>
                <input type="checkbox" onChange={this.handleCheck} checked={this.state.checked}/>
                {msg}
            </div>
        )
    }
}

