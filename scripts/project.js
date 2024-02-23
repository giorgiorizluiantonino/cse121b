/// scripts/project.js

function convert() {
    // Get input value and units
    var inputValue = parseFloat(document.getElementById("inputValue").value);
    var inputUnit = document.getElementById("inputUnit").value;
    
    // Get output units
    var outputUnit = document.getElementById("outputUnit").value;

    // Perform conversion
    var outputValue;
    switch(inputUnit) {
        case "meter":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue;
                    break;
                case "kilometer":
                    outputValue = inputValue / 1000;
                    break;
                case "mile":
                    outputValue = inputValue / 1609.34;
                    break;
                case "foot":
                    outputValue = inputValue * 3.28084;
                    break;
                case "yard":
                    outputValue = inputValue * 1.09361;
                    break;
                case "inch":
                    outputValue = inputValue * 39.3701;
                    break;
            }
            break;
        case "kilometer":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue * 1000;
                    break;
                case "kilometer":
                    outputValue = inputValue;
                    break;
                case "mile":
                    outputValue = inputValue / 1.60934;
                    break;
                case "foot":
                    outputValue = inputValue * 3280.84;
                    break;
                case "yard":
                    outputValue = inputValue * 1093.61;
                    break;
                case "inch":
                    outputValue = inputValue * 39370.1;
                    break;
            }
            break;
        case "mile":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue * 1609.34;
                    break;
                case "kilometer":
                    outputValue = inputValue * 1.60934;
                    break;
                case "mile":
                    outputValue = inputValue;
                    break;
                case "foot":
                    outputValue = inputValue * 5280;
                    break;
                case "yard":
                    outputValue = inputValue * 1760;
                    break;
                case "inch":
                    outputValue = inputValue * 63360;
                    break;
            }
            break;
        case "foot":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue * 0.3048;
                    break;
                case "kilometer":
                    outputValue = inputValue * 0.0003048;
                    break;
                case "mile":
                    outputValue = inputValue * 0.000189394;
                    break;
                case "foot":
                    outputValue = inputValue;
                    break;
                case "yard":
                    outputValue = inputValue * 0.333333;
                    break;
                case "inch":
                    outputValue = inputValue * 12;
                    break;
            }
            break;
        case "yard":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue * 0.9144;
                    break;
                case "kilometer":
                    outputValue = inputValue * 0.0009144;
                    break;
                case "mile":
                    outputValue = inputValue * 0.000568182;
                    break;
                case "foot":
                    outputValue = inputValue * 3;
                    break;
                case "yard":
                    outputValue = inputValue;
                    break;
                case "inch":
                    outputValue = inputValue * 36;
                    break;
            }
            break;
        case "inch":
            switch(outputUnit) {
                case "meter":
                    outputValue = inputValue * 0.0254;
                    break;
                case "kilometer":
                    outputValue = inputValue * 0.0000254;
                    break;
                case "mile":
                    outputValue = inputValue * 0.000015783;
                    break;
                case "foot":
                    outputValue = inputValue * 0.0833333;
                    break;
                case "yard":
                    outputValue = inputValue * 0.0277778;
                    break;
                case "inch":
                    outputValue = inputValue;
                    break;
            }
            break;
    }

    // Display converted value
    document.getElementById("outputValue").textContent = outputValue.toFixed(2);
}
