// Prototypical Inheritence - 2 Resetting the Constructor



// function Shape(){
    
// }

// Shape .prototype.duplicate = function(){
//     console.log('duplicate');
// }


// function Circle(radius){
//     this,radius = radius;
// }

// //  Circle.prototype = Object.create(Object.prototype); //Before
// Circle.prototype = Object.create(Shape.prototype); //We can get the prototype of Shape to new Object


// Circle.prototype.draw = function(){
//     console.log('draw');
// }


// const s = new Shape();
// const c = new Circle(1);






//Prototypical Inheritance











// function Circle(radius){

//     // Instance members
//     this.radius = radius;

//     this.move = function(){
//         this.draw();
//         console.log('move');
//     }

// }




// const c1 = new Circle(1);

// // Prototype members
// Circle.prototype.draw = function(){
//     console.log('draw');

// }


// //Object.keys returns only instance members
// console.log(Object.keys(c1));

// //for in loop returns all members (instance + prototype)
// for (let key in c1) console.log(key);


// //Own Property = Instance property









// function Circle(radius){

//     // Instance members
//     this.radius = radius;

//     this.move = function(){
//         this.draw();
//         console.log('move');
//     }

// }

// // Prototype members
// Circle.prototype.draw = function(){
//     console.log('draw');

// }

// const c1 = new Circle(1);

// const c2 = new Circle(2);

// Circle.prototype.toString = function(){
//     return `Circle with radius ${this.radius}`
// }

// console.log(c1, c2);
// c1.move();








// Object.getPrototypeOf(myObj);

// // myObj.__proto__ (parent of myObj)

// function Circle(radius){
//     this.radius = radius;
// }

// const circle = new Circle(1);

// Circle.prototype === circle.__proto__;




// let person ={name:"Yuuto"};

// Object.defineProperty(name, 'name', {
//     writable:false,
//     enumerable: true,
//     configurable: false;
     

// });

// // let objectBase = Object.getPrototypeOf(person);

// // let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');

// // console.log(descriptor);




// let person = {
//     name: 'Yuuto'
// }

// for (let key in person){
//     console.log(key);
// }




















// function Stopwatch(){
//     let startTime, endTime, running, duration = 0;

//     this.start = function(){
//         if (running)
//             throw new Error('Stopwatch has already started');

//         running = true;

//         startTime= new Date();

//     };

//     this.stop = function(){
//         if(!running)
//             throw new Error('Stop watch has already stopped');

//         running=false;
//         endTime= new Date();

//         const seconds = (endTime.getTime() - startTime.getTime()) /1000;

//         duration+=seconds;

//     };

//     this.reset = function(){
//         startTime = null;
//         endTime = null;
//         running = false;
//         duration = false;

//     };

//     Object.defineProperty(this, 'duration',{
//         get: function(){return duration}
//     });

// }










// function Circle(radius){
//     this.radius = radius;
//     let defaultLocation ={x:0,y:0};

//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }

//     let computeOptimumLocation = function(){
//         //
//     };
//     this.draw=function(){
//         computeOptimumLocation(0.1);
//         console.log(draw);
//     }

//     Object.defineProperty(this, 'defaultLocation', {
//         get: function(){
//             return defaultLocation;
//         },
//         set: function(value){
//             if (!value.x || !value.y)
//                 throw new Error('Invalid Location');
//             defaultLocation=value;

//         }
//     });
// }

// const circle = new Circle(10);

// for (let key in circle){
//     if (typeof circle[key]!=='function') 
//         console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);


// circle.defaultLocation = {x:1, y:1};

// console.log(circle.defaultLocation)
// console.log(keys);



// if ('radius' in circle)
//     console.log('Circle has a radius');









// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }


// const circle = new Circle(10);


// circle.location={x:1};















// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }


// const another = new Circle(1);



// function createCircle(radius){
//     return {
//         radius,
//         draw: function(){
//             console.log('draw');
//         },
//     }
// }

// let circle = createCircle();

// circle.draw();


// console.log('oop');