function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputTemp)) {
        alert("Please enter a valid temperature");
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (inputUnit) {
        case 'C':
            celsius = inputTemp;
            fahrenheit = (inputTemp * 9/5) + 32;
            kelvin = inputTemp + 273.15;
            break;
        case 'F':
            celsius = (inputTemp - 32) * 5/9;
            fahrenheit = inputTemp;
            kelvin = celsius + 273.15;
            break;
        case 'K':
            celsius = inputTemp - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = inputTemp;
            break;
        default:
            break;
    }

    document.getElementById('outputCelsius').innerText = `Celsius: ${celsius.toFixed(2)}°C`;
    document.getElementById('outputFahrenheit').innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    document.getElementById('outputKelvin').innerText = `Kelvin: ${kelvin.toFixed(2)}K`;
}
