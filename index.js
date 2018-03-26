function add (a,b){
  return a + b
}

function subtract (a,b){
  return a - b
}

function multiply (a,b){
  return a * b
}

function divide (a,b){
  return a / b
}

function inc (n){
  return n++
}

function dec (n){
  return n--
}

function makeInt (n){
  if (parseInt(n) === NaN){
    return parseInt(n)
  }
}

function preserveDecimal (n){
  if (parseFloat(n) === NaN){
    return parseFloat(n)
  } else {
    return parseFloat(n)
  }
}
