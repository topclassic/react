import React from "react";

export class DynamicData extends React.Component{

    render(){
        let content = "";
        if(true){
            content = <p>Hello</p>
        }
        return(

            <div>
                <p>Dynamic Data</p>
                {content}
                { 5==2 ? "Yes" : "No"}
            </div>
        )
    }
}
