//LengthConversion(), volumeConversion(), massConversion() takes the input value and conducts conversion between metric units.
//convertValue() is the outer function that nests the aforementioned functions
//convertValue() provides the 'val' parameter used by the nested functions for their respective functions

//'val' is a parameter representing the input value to be converted, it is the derived from the 'this.value' within the html

//.toFixed(3) rounds up the results to three decimal places.

//document.getElementById grabs the html id attributes within the <main> tag and equates it to the appropiate function
//this DOM allows the display of the results calculated and converted within the functions


function convertValue(val) {
  function lengthConversion() {
    let meter2Foot = val * 3.281
    meter2Foot = meter2Foot.toFixed(3)
    meter2Foot += ' feet'
    
    let foot2Meter = val * 0.305
    foot2Meter = foot2Meter.toFixed(3)
    foot2Meter += ' meters'
  
    let value = val + ' ' + 'meters' + ' = ' + meter2Foot + ' | '  + val + ' ' + 'feet' + ' = ' + foot2Meter
    return value;
  }
  
  document.getElementById('length-el').textContent = lengthConversion()
  
  
  function volumeConversion() {
    let gallon2Litre = val * 3.785
    gallon2Litre = gallon2Litre.toFixed(3)
    gallon2Litre += ' litres'
    
    let litre2Gallon = val * 0.264
    litre2Gallon = litre2Gallon.toFixed(3)
    litre2Gallon += ' gallons'
  
    let value = val + ' ' + 'gallons' + ' = ' + gallon2Litre + ' | '  + val + ' ' + 'litres' + ' = ' + litre2Gallon
    return value;
  }
  
  document.getElementById('volume-el').textContent = volumeConversion()
  
  
  function massConversion() {
    let pound2Kilo = val * 0.454
    pound2Kilo = pound2Kilo.toFixed(3)
    pound2Kilo += ' kilos'
    
    let kilo2Pound = val * 2.205
    kilo2Pound = kilo2Pound.toFixed(3)
    kilo2Pound += ' pounds'
  
    let value = val + ' ' + 'pounds' + ' = ' + pound2Kilo + ' | '  + val + ' ' + 'kilos' + ' = ' + kilo2Pound
    return value;
  }
  
  document.getElementById('mass-el').textContent = massConversion()
}
