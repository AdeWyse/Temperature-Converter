import React, {Component, useState} from 'react'
import {Converter} from "./Converter";



const styles = {
    select: {

        height: "2.5em",
        color: "#292b2c",
        backgroundColor: "#fff",
        margin: "1em"
    },
    result: {

        height: "2.5em",
        fontsize: "3em",
        margin: "1em"
    },
    title: {
        marginTop: "3.5em",
        paddingBottom: "2em"
    }
};
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

               <h1 style={styles.title}>Temperature Converter</h1>
               <h2>Chose your options</h2>
               <form>
                   <select name="original" id="original" style={styles.select} onChange={ (e) => this.setState({ original: this.setOriginal.original = e.target.value})}>
                       <option value="celcius">Celcius</option>
                       <option value="fahrenheit">Fahrenheit</option>
                       <option value="kelvin">Kelvin</option>
                   </select>
                   <input type="number" id="toConvert" style={styles.select} onChange={ (e) => this.setState({ toConvert: this.setToConvert.toConvert = e.target.value})}/>
                   <select name="target" id="tartget" style={styles.select} onChange={ (e) => this.setState({ target: this.setTarget.target= e.target.value})}>
                       <option value="celcius">Celcius</option>
                       <option value="fahrenheit" selected>Fahrenheit</option>
                       <option value="kelvin">Kelvin</option>
                   </select>
                   <button type="button" style={styles.select} onClick={(e) => {this.convert(e)}}>Convert</button>
               </form>

               <div id="converted" style={styles.result}>Conversion result: {this.setConverted.converted}</div>
           </div>
        )
    }

    convert = (e) => {
        e.preventDefault();
        var converter = new Converter();
        this.setState({ converted: this.setConverted.converted = converter.DecideConversion(this.setOriginal.original, this.setTarget.target, this.setToConvert.toConvert)});
    }

}

export default Input
