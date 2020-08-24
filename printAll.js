const index = require("./index");

function GetallColorCodedPairs() {
  var i;
  var colorCodePair = [];
  for (i = 1; i < 26; i++) {
    var colorCombo ={}
    colorCombo.number = i;
    colorCombo.color = index.GetColorFromPairNumber(i);
    colorCodePair.push(colorCombo);  
  }
  return colorCodePair;
}
//console.log(GetallPairs().toString());