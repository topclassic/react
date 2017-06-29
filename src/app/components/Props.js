import React from "react";

export class Props extends React.Component{

    render(){
        console.log(this.props)
        return(

            <div>
                <h1>{this.props.title}</h1>
                <p>Object => Name:{this.props.user.name} </p>
                <div>
                    <h1>AGE</h1>
                    <ul>
                        {this.props.user.age.map((ages,i)=><li key={i}>{ages}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}