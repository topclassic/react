import React from "react";

export class Events extends React.Component{
    constructor(props){
        super()
        this.age = props.age;
    }
    makeAge = () => {
        this.age ++
        console.log(this.age)
    }
    edit = () => {
        alert("1234")

    }
    render(){

        return(
            <div>
                <p>{this.age}</p>
                <button onClick={this.edit}>Edit</button>
                <button onClick={this.makeAge}>MakeAge</button>
            </div>
        )
    }
}