
import React from "react"
import ReactDOM from "react-dom"

import { Header } from "./components/header"
import { DynamicData } from "./components/DynamicData"

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
            </div>
        )
    }
}
ReactDOM.render(<div> <App /> </div>,document.getElementById('MultiComp'))
