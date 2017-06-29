
import React from "react"
import ReactDOM from "react-dom"

import { Header } from "./components/header"
import { DynamicData } from "./components/DynamicData"
import { Props } from "./components/Props"
import { Events } from "./components/Events"

class App extends React.Component {
    render() {
        var user = {
            name: "Top",
            age: ["26","OK","Yes"]
        }
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <DynamicData/>
                </div>
                <div>
                    <Props title="007" user={user}/>

                </div>
                <div>
                    <Events age="26"/>

                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('MultiComp'))
