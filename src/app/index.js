
import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Your Name</h2>
                <p>Chotipat</p>
            </div>
        )
    }
}
ReactDOM.render(<div> <App /> <App /> </div>,document.getElementById('MultiComp'))
