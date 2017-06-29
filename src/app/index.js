
import React from "react"
import ReactDOM from "react-dom"

import { Header } from "./components/header"
import { DynamicData } from "./components/DynamicData"
import { Props } from "./components/Props"

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <DynamicData/>
                </div>
                <div>
                    <Props title="Gravity"/>
                    <Props title="007"/>

                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App/> </div>,document.getElementById('MultiComp'))
