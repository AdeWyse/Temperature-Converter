export class Converter {

    DecideConversion(original, target, toConvert){
        if(target == original){
            return  toConvert;
        }

        if(original == "celcius"){
            if(target == "fahrenheit"){
                return this.ConverterCelciusToFahrenheit(toConvert);
            }
            if(target == "kelvin"){
                return  this.ConverterCelciusToKelvin(toConvert);
            }
        }

        if(original == "fahrenheit"){
            if(target == "celcius"){
                return this.ConverterFahrenheitToCelcius(toConvert);
            }
            if(target == "kelvin"){
                return  this.ConverterFahrenheitToKelvin(toConvert);
            }
        }

        if(original == "kelvin"){
            if(target == "celcius"){
                return this.ConverterKelvinToCelcius(toConvert);
            }
            if(target == "fahrenheit"){
                return  this.ConverterKelvinToFahrenheit(toConvert);
            }
        }
    }
    ConverterFahrenheitToCelcius(temF){
        var tempC;
        tempC = (5*temF -160)/9;
        return tempC;
    }

    ConverterCelciusToFahrenheit(temC){
         var tempF;
        tempF = (9*temC + 160)/5;
        return tempF;
    }

     ConverterKelvinToCelcius(tempK){
        var tempC;
        tempC = tempK - 273;
        return tempC;
    }

    ConverterCelciusToKelvin(temC){
        var tempK;
        tempK = temC + 273;
        return tempK;
    }

     ConverterKelvinToFahrenheit( temK){
        var tempF;
        tempF =(9*temK - 2297)/5;
        return tempF;
    }

    ConverterFahrenheitToKelvin(temF){
         var tempK;
        tempK = (5*+2297)/9;
        return tempK;
    }

}
