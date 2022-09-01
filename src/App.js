import React, { Component } from 'react'
import {Converter} from "./Converter";
import Input from "./Input";


class App extends Component {
    render() {
        var conversor = new Converter();
        var converted;

        return (
            <div className="App">
                <h1>Temperature Converter</h1>
                <Input />
            </div>
        )
    }
}

export default App
