// Tue, Feb 20th, 2018
// Ben Moren + Joseph Berns
// MCAD Coding Concepts
// Arrays, tracking mouse movements, working with the Index function\
// stepping into Object Oriented Programming
// working with infinitely expandable objects

// Adding Items:
// array.push(newItem)

// Deleting Items:
// array.pop
// removes the last item and returns it.
// useful for temporary numbers and uses.

// Slice
// array.slice(begin,end)
// Logs them out, but doesn't delete or change the array.
// array = array.slice(begin,end) ... to crop and overwrite





let bevs = ['disco','pop','house','noise','trap']
let textLocation = 20

function setup() {
  createCanvas(windowWidth,windowHeight)

bevs[4]='vaportrap'
bevs[bevs.length] = "hula ambient" // this is a bummer
bevs.push('digital spa')

for (let i = 0 ; i < 100 ; i++){
  bevs.push('unknown mix #' + i)
}

}

function indexMaster(){
  // return bevs.length
  for (let i = 0; i < bevs.length ; i++){
    return (bevs[i])
    console.log(bevs[i])
    textLocation = textLocation + 20
  }
}

function draw() {
// text(indexMaster(),20,20+textLocation)
// indexMaster()



for (let i = 0; i < bevs.length ; i++){
  // return (bevs[i])
  console.log(bevs[i])
  textLocation = textLocation + 20
}


}
