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

let history = 100;
let spacing = 30;
let x = [];
let y = [];

function setup() {
  // createCanvas(windowWidth,windowHeight)
  // let's start with some Blank Memory
  for ( var i = 0 ; i < history ; i++){
    x[i] = 0
    y[i] = 0
  }
noStroke()
console.log(x,y) //

}



function draw() {
  // background(200);

// rewriting history, shifting it forward
for (let i = history ; i > 0 ; i--){
  x[i] = x[i - 1];
  y[i] = y[i - 1];
}

x[0] = mouseX
y[0] = mouseY

for (let i = 0; i < history ; i++){
  fill(255-i*20,200,100+i*10,255-i*5);
  ellipse(x[i],y[i],5*i,5*i)
  }
} // draw
