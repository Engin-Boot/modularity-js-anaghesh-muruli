const index = require("./index");

function GetallColorCodedPairs() {
  var i;
  var pairColorCode = [];
  for (i = 1; i < 26; i++) {
    var colorCombo ={}
    colorCombo.number = i;
    colorCombo.color = index.GetColorFromPairNumber(i);
    pairColorCode.push(colorCombo);  
  }
  return pairColorCode;
}
//console.log(GetallPairs().toString());