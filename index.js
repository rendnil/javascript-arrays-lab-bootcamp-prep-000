const app = "I don't do much."


function destructivelyAppendKitten( name) {
  
  kittens.push(name)
  return kittens
  
}

function destructivelyPrependKitten(name) {
  
  kittens.unshift(name)
  return kittens
  
}

function destructivelyRemoveLastKitten() {
  
  kittens.pop()
  return kittens
  
}

function destructivelyRemoveFirstKitten() {
  
  kittens.shift()
  return kittens
  
}

function appendKitten(name)  {
  
  var array = [...kittens, name]
  return array
  
  
}

function prependKitten(name) {
  var array = [name, ...kittens]
  return array
  
}

function removeLastKitten() {
  var array = 
  
}
  