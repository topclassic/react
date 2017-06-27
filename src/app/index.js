
import React from "react"
import ReactDOM from "react-dom"

import { Header } from "./components/header"
import { Main } from "./components/Main"

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <Main/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<div> <App /> <App /> </div>,document.getElementById('MultiComp'))
