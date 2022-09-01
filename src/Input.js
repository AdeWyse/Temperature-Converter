import React, {Component, useState} from 'react'
import {Converter} from "./Converter";




class Input extends Component {

    constructor(props){
       super(props);

       this.setOriginal = {
           original: "celcius"
       };

        this.setTarget = {
            target: "fahrenheit"
        };

        this.setToConvert = {
            toConvert: 0
        };

        this.setConverted = {
            converted: 0
        }
    }

    render() {

        return (

           <div>
               <h2>Chose your options</h2>
               <form>
                   <select name="original" id="original" onChange={ (e) => this.setState({ original: this.setOriginal.original = e.target.value})}>
                       <option value="celcius">Celcius</option>
                       <option value="fahrenheit">Fahrenheit</option>
                       <option value="kelvin">Kelvin</option>
                   </select>
                   <input type="number" id="toConvert" onChange={ (e) => this.setState({ toConvert: this.setToConvert.toConvert = e.target.value})}/>
                   <select name="target" id="tartget" onChange={ (e) => this.setState({ target: this.setTarget.target= e.target.value})}>
                       <option value="celcius">Celcius</option>
                       <option value="fahrenheit" selected>Fahrenheit</option>
                       <option value="kelvin">Kelvin</option>
                   </select>
                   <button type="button" onClick={(e) => {this.convert(e)}}>Convert</button>
               </form>

               <div id="converted">Conversion result: {this.setConverted.converted}</div>
           </div>
        )
    }

    convert = (e) => {
        e.preventDefault();
        var converter = new Converter();
        console.log(this.setOriginal.original);
        console.log(this.setTarget.target);
        console.log(this.setToConvert.toConvert);
        this.setState({ converted: this.setConverted.converted = converter.DecideConversion(this.setOriginal.original, this.setTarget.target, this.setToConvert.toConvert)});
    }

}

export default Input
