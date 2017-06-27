import React from "react";

export class Header extends React.Component{

    render(){
        return(
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Skill</a></li>
                </ul>
            </nav>
        )
    }
}